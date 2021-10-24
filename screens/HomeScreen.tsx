import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';
import { API, graphqlOperation } from 'aws-amplify';
import { listAlbumCategorys } from '../src/graphql/queries';

import { RootTabScreenProps } from '../types';


export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchAlbumCategories = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategorys))
        setCategories(data.data.listAlbumCategorys.items)
      } catch (e) {
        console.log(e)
      }
    }

    fetchAlbumCategories()
  }, []);

  return (

    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <AlbumCategory title={item.title} albums={item.albums.items} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },

});
