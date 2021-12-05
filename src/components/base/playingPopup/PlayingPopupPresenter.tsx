import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Track } from 'react-native-track-player';

import {
    TouchableOpacity,
    Text,
    View,
    Image,
} from 'react-native';

import styles from './PlayingPopupStyled';


interface PlayingPopupProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
    nowTrackInfo : Track | null;
    playingStatus : boolean;

    onNextButton : () => void;
    onPrevButton : () => void;
    onPlayAndPauseButton : () => void;
    onGoPlayingNowListButton : () => void;
    onGoPlayingNowButton : () => void;
}
const PlayingPopupPresenter = ({ navigation, route, ...props } : PlayingPopupProps) => {
    return (
        props.nowTrackInfo ?
        <View style = {styles.container}>
            {/* <View style = {styles.albumCoverImgWrapper}>
                <Text>앨범커버입니다.</Text>
            </View> */}
            <View style = {styles.musicPopupWrapper}>
                <TouchableOpacity
                    style = {styles.musicInfoWrapper}
                    onPress = {props.onGoPlayingNowButton}
                >
                    <Text style = {styles.musicInfoTitle}>{props.nowTrackInfo.title}</Text>
                    <Text style = {styles.musicInfoArtist}>{props.nowTrackInfo.artist}</Text>
                </TouchableOpacity>
                <View style = {styles.musicButtonWrapper}>
                    <TouchableOpacity
                        style = {styles.musicButton}
                        onPress = {props.onPrevButton}
                    >
                        <Image style = {styles.musicButtonImg} source = {require('../../../../assets/prev.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.musicButton}
                        onPress = {props.onPlayAndPauseButton}
                    >
                        <Image style = {styles.musicButtonImg} source = { props.playingStatus ? require('../../../../assets/pause.png') : require('../../../../assets/play.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.musicButton}
                        onPress = {props.onNextButton}
                    >
                        <Image style = {styles.musicButtonImg} source = {require('../../../../assets/next.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.musicButton}
                        onPress = {props.onGoPlayingNowListButton}
                    >
                        <Image style = {styles.musicButtonImg} source = {require('../../../../assets/playlist.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {{...styles.musicPlayingUnderbar, width : '50%'}} />
        </View> : null
    );
};

export default PlayingPopupPresenter;
