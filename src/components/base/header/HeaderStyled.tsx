import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : '15%',
        backgroundColor : '#fff',

        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
    },

    headerWrapper : {
        width : '100%',
        backgroundColor : 'transparent',

        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',

        paddingHorizontal : '5%',
    },

    backButtonWrapper : {
        height : '100%',
        width : '10%',
        aspectRatio : 1,

        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
    },

    backButtonImg : {
        height : '80%',
        width : '80%',

        resizeMode : 'contain',
    },

    headerText : {
        fontFamily : 'Cafe24SsurroundAir',

        fontSize : 18,
        fontWeight : '700',
        letterSpacing : 0.7,
    },
});

export default styles;
