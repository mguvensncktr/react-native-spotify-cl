import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    by: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10

    },
    likes: {
        color: 'lightgray',
        marginTop: 10,
        fontSize: 12,

    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        width: 200,
        height: 200,
    },
    creatorContainer: {
        margin: 15,
    },
    button: {
        backgroundColor: '#1DB954',
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        bottom: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        marginLeft: 15,

    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

})

export default styles;
