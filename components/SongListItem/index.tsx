import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './style';
import { Song } from '../../types';
import { Entypo } from '@expo/vector-icons';
import { AppContext } from '../../AppContext';


export type SongListItemProps = {
    song: Song
}

const SongListItem = (props: SongListItemProps) => {
    const { setSongId } = useContext(AppContext);

    const onPlay = () => {
        setSongId(song.id);
    }
    const { song } = props;

    return (
        <TouchableOpacity onPress={onPlay}>
            <View style={styles.container}>
                <View>
                    <Image source={{ uri: song.imageUri }} style={styles.image} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SongListItem;
