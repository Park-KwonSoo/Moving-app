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

        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
    },

    playListHeader : {
        width : '90%',
        height : '30%',
        borderRadius : 7,
        backgroundColor : '#ededed',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',

    },

    playListImageWrapper : {
        width : '40%',
        aspectRatio : 1,

        borderWidth : 0.5,
        borderColor : 'transparent',
        borderRadius : 7,

        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    },

    playListImage : {
        height : '80%',
        width : '80%',
    },

    playListInfoWrapper : {
        width : '50%',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between',
        height : '80%',
    },

    playListCreatedDateWrapper : {
        display : 'flex',
        flexDirection : 'column',
    },

    playListCreatedDateInfo : {
        fontFamily : 'Cafe24SsurroundAir',
        fontSize : 13,
        fontWeight : '400',
        color : '#a0a0a0',
        marginBottom : '2%',
    },

    playListCreatedDate : {
        fontFamily : 'Cafe24SsurroundAir',

        fontSize : 15,
        fontWeight : '500',
        color : '#343434',
        letterSpacing : 1,
    },

    playListOtherInfoWrapper : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'flex-end',
        paddingRight : '5%',
    },

    playListNumOfTrackInfo : {
        fontFamily : 'Cafe24SsurroundAir',
        color : '#a0a0a0',
    },

    playListNumOfTrack : {
        fontFamily : 'Cafe24SsurroundAir',
        color : '#343434',
    },

    playListBody : {
        marginTop : '5%',
        backgroundColor : '#fff',
        borderTopWidth : 1.2,
        borderTopColor : '#343434',
        width : '95%',
        height : '62%',

        display: 'flex',
        flexDirection : 'column',
    },

    eachTrackWrapper : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
    },

    eachTrackImageWrapper : {
        width : '20%',
        aspectRatio : 1,

        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',

        marginRight : '3%',
    },

    eachTrackImage : {
        height : '80%',
        width : '80%',
        resizeMode : 'contain',
    },

    eachTrackInfoWrapper : {
        display : 'flex',
        flexDirection : 'column',
        width : '70%',
    },

    eachTrackInfoTitle : {
        fontFamily : 'Cafe24SsurroundAir',

        fontSize : 18,
        fontWeight : '500',
        marginBottom : '5%',
    },

    eachTrackInfoArtist : {
        fontFamily : 'Cafe24SsurroundAir',

        fontSize : 13,
        fontWeight : '400',
    },

    eachTrackSeperator : {
        borderWidth : 0.5,
        borderColor : '#ddd',
    },

});

export default styles;
