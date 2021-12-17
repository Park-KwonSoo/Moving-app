import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        marginTop : '10%',
        display : 'flex',
        flexDirection : 'column',

        paddingHorizontal : '5%',
        height : '70%',
    },

    playingWrapper : {
        height : '95%',

        display : 'flex',
        flexDirection : 'column',
    },

    musicInfoWrapper : {
        alignSelf : 'center',
        marginTop : '25%',

        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        width : '70%',
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
        width : '150%',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
    },

    musicTitleText : {
        fontFamily : 'Cafe24SsurroundAir',
        fontSize : 21,
        fontWeight : '600',
        color : '#303a52',
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
        fontFamily : 'Cafe24SsurroundAir',
        fontSize : 15,
        fontWeight : '500',
        color : '#a0a0a0',
    },

    lyricsWrapper : {
        marginTop : '10%',
        width : '100%',

        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',

        paddingVertical : '2%',
        paddingHorizontal : '3%',
    },

    lyricsText : {
        fontFamily : 'Cafe24SsurroundAir',
        fontSize : 14,
        fontWeight : '500',
    },

});

export default styles;
