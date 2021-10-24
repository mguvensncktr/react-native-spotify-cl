import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function LibraryScreen() {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white' }}>Library Screen</Text>
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
