import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        position : 'absolute',
        zIndex : 100,
    },

    modalWrapper : {
        backgroundColor : '#ddd',
        width : '100%',
        borderRadius : 3,
    },

    eachButtonWrapperUnselected : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'transparent',
    },

    eachButtonWrapperSelected : {
        minHeight : '20%',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#fefefe',
    },

    eachButtonText : {
        fontSize : 12,
        fontFamily : 'Cafe24SsurroundAir',
        fontWeight : '500',
        letterSpacing : 1,
    },

    seperatorLine : {
        borderWidth : 0.3,
        backgroundColor : '#a0a0a0',
        color : '#a0a0a0',
    },
});

export default styles;
