import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './style';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Sound } from 'expo-av/build/Audio';
import { AppContext } from '../../AppContext';
import { API, graphqlOperation } from 'aws-amplify';
import { getSong } from '../../src/graphql/queries';


const PlayerWidget = () => {

    const [song, setSong] = useState(null);
    const [sound, setSound] = useState<Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [duration, setDuration] = useState<number | null>(null);
    const [position, setPosition] = useState<number | null>(null);
    const [progress, setProgress] = useState<number>(0);
    const { songId } = useContext(AppContext);

    useEffect(() => {
        const fetchSong = async () => {
            try {
                const data = await API.graphql(graphqlOperation(getSong, { id: songId }))
                setSong(data.data.getSong);
            } catch (e) {
                console.log(e)
            }
        }

        fetchSong();
    }, [songId])

    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
        const prog = (status.positionMillis / status.durationMillis) * 100;
        setProgress(prog);
    }

    const playCurrentSong = async () => {

        if (sound) {
            await sound.unloadAsync();
        }
        const { sound: newSound } = await Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: isPlaying },
            onPlaybackStatusUpdate
        )
        setSound(newSound)
    }

    useEffect(() => {
        if (song) {
            playCurrentSong();
        }
    }, [song])

    const onPlayPausePress = async () => {
        if (!sound) {
            return;
        }
        if (isPlaying) {
            await sound.stopAsync();
            setProgress(getProgress())
        } else {
            await sound.playAsync();
        }
    }

    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return 0;
        }
        return (position / duration) * 100;
    }

    if (!song) {
        return null;
    }

    return (
        <View>
            <View style={styles.container}>
                <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={styles.innerContainer}>
                    <View style={styles.info}>
                        <Text style={styles.title}>{song.title}</Text>
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>
                    <View style={styles.icons}>
                        <MaterialIcons name="offline-share" size={25} color="white" style={{ paddingRight: 30 }} />
                        <TouchableOpacity onPress={onPlayPausePress}>
                            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={25} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={[styles.progress, { width: `${progress}%` }]}>
            </View>
        </View>
    )
}

export default PlayerWidget;
