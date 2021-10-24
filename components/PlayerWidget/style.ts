import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 49,
        flexDirection: 'row',
        backgroundColor: '#4e7909',
        width: '95%',
        height: 50,
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 10,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 10,
        marginLeft: 10
    },
    title: {
        color: 'white',
        fontSize: 16
    },
    artist: {
        color: '#dedede',
        fontSize: 14,
        fontWeight: '400'
    },
    info: {
        justifyContent: 'space-around',
        marginLeft: 10
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,

        alignItems: 'center',
    },
    icons: {
        flexDirection: 'row',
        marginRight: 20,
    },
    progress: {
        height: 3,
        backgroundColor: 'white',
        bottom: 49,
        alignItems: 'center',
        position: 'absolute',
        marginLeft: 20,
        borderRadius: 10
    }

})

export default styles;
