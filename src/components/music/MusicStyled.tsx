import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#fff',
        height : '100%',
        display : 'flex',
        flexDirection : 'column',
    },

    iosSlideBar : {
        alignSelf : 'center',

        width : '10%',
        height : 7,
        marginTop : '3%',

        borderRadius : 30,
        backgroundColor : '#ddd',
    },

    headerWrapper : {
        marginTop : '10%',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
    },

    headerButton : {
        marginLeft : '5%',
    },

    me : {
        fontSize : 20,
        fontWeight : '700',
        color : '#303a52',
    },

    notMe : {
        fontSize : 15,
        color : '#a0a0a0',
    },

    footerWrapper : {
        height : '15%',
        display : 'flex',
        flexDirection : 'column',
        paddingHorizontal : '3%',
        paddingTop : '3%',
    },

    musicBuffer : {
        height : '5%',
        backgroundColor : '#9e579d',
    },

    controllerWrapper : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        height : '95%',
    },

    controlButton : {
        height : '50%',
        width : '8%',
        aspectRatio : 1,
    },

    controlButtomImg : {
        height : '100%',
        width : '100%',
    },

    modeButton : {
        height : '50%',
        width : '5%',
        aspectRatio : 1,
    },

    modeButtonImg : {
        height : '100%',
        width : '100%',
    },


});

export default styles;
