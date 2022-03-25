import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    coinContainer: {
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#282828',
        padding: 15
    },
    image: {
        height: 30,
        width: 30,
        marginRight: 10,
        alignSelf: 'center'
    },
    title: {
        color: '#fff',
        fontSize:16,
        fontWeight: 'bold',
        marginBottom: 3
    },
    textContainer: {
        flexDirection: 'row'
    },
    text: {
        color: '#fff',
        marginRight: 5
    },
    coinRankContainer: {
        backgroundColor: 'gray',
        paddingHorizontal: 5,
        borderRadius: 5,
        marginRight: 5,
    },
    coinRank: {
        color: '#fff',
    
    },
    marginCapContainer: {
        marginLeft:'auto'
    },
    expoVectorDownArrow: {
        alignSelf: 'center',
        marginRight: 5,
        fontWeight:'bold',
    }
});
export default styles;