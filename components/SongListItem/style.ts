import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 15,
    },
    image: {
        width: 50,
        height: 50
    },
    title: {
        color: 'white',
        fontSize: 18
    },
    artist: {
        color: 'lightgray',
        fontSize: 16,
        fontWeight: '300'
    },
    info: {
        justifyContent: 'space-around',
        marginLeft: 10
    },
})

export default styles;
