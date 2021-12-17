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
        paddingVertical : '1%',
        paddingHorizontal : '2%',
    },

    topButtonImg : {
        marginRight : '1%',
    },

    topButtonTxt : {
        fontFamily : 'Cafe24SsurroundAir',
        fontSize : 15,
        fontWeight : '500',
    },

    listWrapper : {
        height : '95%',
        backgroundColor : '#ededed',
        borderRadius : 5,
    },

    swipeDeleteWrapper : {
        width : '20%',
        height : '100%',
        backgroundColor : '#FF6032',
    },

    swipeDeleteImageWrapper : {
        height : '100%',
        width : '100%',
        aspectRatio :1,

        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
    },

    swipeDeleteImage : {
        height : '40%',
        width : '40%',
        resizeMode : 'contain',
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
        width : '70%',
    },

    eachListTitleTextSelect : {
        fontFamily : 'Cafe24Ssurround',
        fontSize : 16,
        fontWeight : '600',
        marginBottom : '5%',
        color : '#92579d',
    },

    eachListTitleTextUnselect : {
        fontFamily : 'Cafe24SsurroundAir',
        fontSize : 16,
        fontWeight : '600',
        marginBottom : '5%',
        color : '#343434',
    },

    eachListArtistText : {
        fontFamily : 'Cafe24SsurroundAir',
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
