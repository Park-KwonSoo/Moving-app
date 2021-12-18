import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
    },

    bodyWrapper : {
        flex : 9,

        width : '100%',

        display : 'flex',
        flexDirection : 'column',

    },

    pageWrapper : {
        height : '100%',
        width : '100%',
    },

    assetImage : {
        height : '100%',
        width : '100%',
        resizeMode : 'cover',
    },

    footerWrapper : {
        flex : 1,

        width : '100%',

        backgroundColor : '#fff',

        borderTopColor : '#dedede',
        borderTopWidth : 0.5,

        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',

        paddingBottom : '5%',

    },

    footerNowLocationWrapper : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        marginVertical : '5%',
        backgroundColor : 'transparent',
    },

    footerNotNowLocationDot : {
        height : 10,
        width : 10,
        borderRadius : 100,
        backgroundColor : '#dedede',
        marginHorizontal : '1%',
    },

    footerNowLocationDot : {
        height : 12,
        width : 12,
        borderRadius : 100,
        backgroundColor : '#9e579d',
        marginHorizontal : '1%',
    },

    footerTouchableWrapper : {
        width : '100%',

        backgroundColor : 'transparent',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
    },

    footerTouchableButton : {
        backgroundColor : 'transparent',
        paddingHorizontal : '5%',
        paddingVertical : '2%',
    },

    footerTouchableText : {
        fontFamily : 'Cafe24SsurroundAir',
        fontSize : 13,
        letterSpacing : 0.7,
        color : '#339FFF',
    },

});

export default styles;
