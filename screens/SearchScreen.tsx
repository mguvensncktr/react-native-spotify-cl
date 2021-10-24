import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>Search Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
