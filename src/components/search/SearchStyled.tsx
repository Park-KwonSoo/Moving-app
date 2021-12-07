import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#fff',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        height : '100%',
        width : '100%',
    },

    frame : {
        width : '100%',
    },

    searchBarWrapper : {
        backgroundColor : 'transparent',

        marginVertical : '10%',
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
        width : '70%',
        borderBottomWidth : 0.5,
        borderBottomColor : '#303a52',

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
        borderColor : '#343434',
    },


});

export default styles;
