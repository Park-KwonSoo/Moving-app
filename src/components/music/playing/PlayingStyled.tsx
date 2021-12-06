import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        marginTop : '10%',
        display : 'flex',
        flexDirection : 'column',

        paddingHorizontal : '5%',
    },

    playingWrapper : {
        borderWidth : 1,
        height : '95%',

        display : 'flex',
        flexDirection : 'column',
    },

    musicInfoWrapper : {
        alignSelf : 'center',
        marginTop : '35%',

        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        width : '60%',
    },

    musicAlbumCoverWrapper : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',

        width : '100%',
    },

    musicAlbumCoverImg : {
        width : '100%',
        aspectRatio : 1,
    },

    musicTitleWrapper : {
        marginTop : '10%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
    },

    musicTitleText : {
        fontSize : 21,
        fontWeight : '600',
        color : '#343434',
    },

    musicArtistWrapper : {
        marginTop : '5%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
    },

    musicArtistText : {
        fontSize : 15,
        fontWeight : '500',
        color : '#a0a0a0',
    },

    lyricsWrapper : {
        marginVertical : '5%',
        width : '100%',
        borderWidth : 1,

        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',

        paddingVertical : '2%',
        paddingHorizontal : '3%',
    },

    musicBuffer : {
        marginTop : '15%',
        height : 6,
        backgroundColor : '#9e579d',
    },

    controllerWrapper : {
        marginTop : '1%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
    },


});

export default styles;
