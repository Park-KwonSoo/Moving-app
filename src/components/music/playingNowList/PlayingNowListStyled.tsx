import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        marginTop : '10%',
        display : 'flex',
        flexDirection : 'column',

        paddingHorizontal : '5%',
        height : '70%',
    },

    topButtonWrapper : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        height : '5%',
    },

    topButton : {
        display : 'flex',
        flexDirection : 'row',
    },

    topButtonImg : {
        marginRight : '1%',
    },

    topButtonTxt : {
        fontSize : 15,
        fontWeight : '500',
    },

    listWrapper : {
        height : '95%',
        backgroundColor : '#ededed',
        borderRadius : 5,
    },

    eachListWrapper : {
        display : 'flex',
        flexDirection : 'row',
        width : '100%',
        paddingHorizontal : '5%',
        paddingVertical : '3%',
    },

    eachListAlbumWrapper : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',

        marginRight : '3%',
    },

    eachListAlbumImg : {
        height : 50,
        width : 50,
    },

    eachListMusicInfo : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
    },

    eachListTitleTextSelect : {
        fontSize : 17,
        fontWeight : '600',
        marginBottom : '10%',
        color : '#92579d',
    },

    eachListTitleTextUnselect : {
        fontSize : 17,
        fontWeight : '600',
        marginBottom : '10%',
        color : '#343434',
    },

    eachListArtistText : {
        fontSize : 12,
        fontWeight : '400',
        marginLeft : '1%',
        color : '#a0a0a0',
    },

    seperator : {
        alignSelf : 'center',
        borderWidth : 0.5,
        borderColor : '#ddd',
        width : '98%',
    },


});

export default styles;
