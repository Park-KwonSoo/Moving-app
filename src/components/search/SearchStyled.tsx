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
        paddingVertical : '5%',

        borderWidth : 0.5,
        borderColor : '#dedede',
        borderRadius : 5,

        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around',
    },

    searchBar : {
        width : '60%',
        borderBottomWidth : 0.5,
        borderBottomColor : '#dedede',

        paddingVertical : '1%',
        paddingHorizontal : '1%',
    },

    searchButton : {
        backgroundColor : 'transparent',
    },

    partitionLine : {
        alignSelf: 'center',
        width : '99%',
        borderWidth : 0.5,
        borderColor : '#343434',
    },


});

export default styles;
