import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { AlbumTypes } from '../../types';
import Album from '../Album';
import styles from './style';


export type AlbumCategoryProps = {
    title: string,
    albums: [AlbumTypes]
}

const AlbumCategory = (props: AlbumCategoryProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title} </Text>
            <FlatList
                data={props.albums}
                renderItem={({ item }) => <Album album={item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default AlbumCategory;
