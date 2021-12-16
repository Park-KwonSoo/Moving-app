import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#fff',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        width : '100%',
        height : '85%',
    },

    wrapper : {
        width : '100%',
        height : '85%',
        marginBottom : '15%',
    },

    frame : {
        width : '100%',
    },

    searchBarWrapper : {
        backgroundColor : 'transparent',

        marginBottom : '10%',
        marginHorizontal : '10%',

        paddingHorizontal : '1%',
        paddingVertical : '2.5%',

        borderWidth : 0.5,
        borderColor : '#dedede',
        borderRadius : 5,

        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around',
    },

    searchBar : {
        fontFamily : 'Cafe24SsurroundAir',

        width : '70%',

        paddingVertical : '1%',
        paddingHorizontal : '1%',
    },

    searchButton : {
        backgroundColor : 'transparent',
        height : '100%',
        width : '7%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
    },

    searchButtonImg : {
        height : '100%',
        width : '100%',
        aspectRatio : 1,
        resizeMode : 'contain',
    },

    partitionLine : {
        alignSelf: 'center',
        width : '99%',
        borderWidth : 0.5,
        borderColor : '#303a52',
    },


});

export default styles;
