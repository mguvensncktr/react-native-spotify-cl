import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AlbumTypes } from '../../types';
import styles from './style';
import { FontAwesome, MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';

export type AlbumHeaderProps = {
    album: AlbumTypes,

}

const AlbumHeader = (props: AlbumHeaderProps) => {
    const { album } = props;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: album.imageUri }} style={styles.image} />
            </View>
            <View style={styles.creatorContainer}>
                <Text style={styles.name}>{album.name}</Text>
                <Text style={styles.by}>{album.by}</Text>
                <Text style={styles.likes}>{album.numberOfLikes} beğenme</Text>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.iconContainer}>
                    <FontAwesome name="heart-o" size={24} color='#a1a1a1' />
                    <MaterialIcons name="arrow-circle-down" size={24} color="#a1a1a1" style={{ marginLeft: 20 }} />
                    <Entypo name="dots-three-horizontal" size={24} color="#a1a1a1" style={{ marginLeft: 20 }} />
                </View>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <AntDesign name="caretright" size={30} color="black" />
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default AlbumHeader;
