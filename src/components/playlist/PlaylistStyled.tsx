import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#fff',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        width : '100%',
        height : '85%',
    },

    wrapper : {
        width : '100%',
        height : '85%',
        marginBottom : '15%',
    },

    PlaylistExplain : {
        fontFamily : 'Cafe24Ssurround',

        marginTop : '5%',
        fontSize : 20,
        marginLeft : '3%',
    },

    PlaylistContainer : {
        marginTop : '5%',
        alignSelf : 'center',
        width : '94%',
    },

    EachWrapper : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        marginVertical : '2%',
    },

    EachImageWrapper : {
        width : '17%',
        aspectRatio : 1,
        marginRight : '3%',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    },

    EachImage : {
        height : '90%',
        width : '90%',
        resizeMode : 'contain',
    },

    EachInfoWrapper : {
        width : '70%',
        display : 'flex',
        flexDirection : 'column',
        height : '100%',
        paddingVertical : '2%',
    },

    EachTitle : {
        fontFamily : 'Cafe24SsurroundAir',
        fontSize : 20,
        fontWeight : '500',
        letterSpacing : 0.7,
        marginBottom : '3%',
    },

    EachNumOfMusic : {
        fontFamily : 'Cafe24SsurroundAir',
        fontSize : 13,
        fontWeight : '300',
        color : '#343434',
    },

    Seperator : {
        borderWidth : 0.5,
        borderColor : '#ddd',
    },
});

export default styles;
