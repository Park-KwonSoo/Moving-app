import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Track } from 'react-native-track-player';
import { RootStackParamList , MovingDefaultProps} from '../../../config/interface';

import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import {
    GestureDetector,
    ManualGesture,
} from 'react-native-gesture-handler';

import styles from './PlayingStyled';


interface PlayingProps extends MovingDefaultProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<RootStackParamList, 'MusicNavigator'>;

    onGestureVolumeControl : ManualGesture;
}
const PlayingPresenter = ({ navigation, route, ...props } : PlayingProps) => {
    return (
        <GestureDetector>
            <SafeAreaView style = {styles.container}>
                <View style = {styles.playingWrapper}>
                    <View style = {styles.musicInfoWrapper}>
                        <GestureDetector gesture = {props.onGestureVolumeControl}>
                        <TouchableOpacity style = {styles.musicAlbumCoverWrapper}>
                            <Image style = {styles.musicAlbumCoverImg} source = {require('../../../../assets/play.png')}/>
                        </TouchableOpacity>
                        </GestureDetector>
                        <View style = {styles.musicTitleWrapper}>
                            <TouchableOpacity>
                                <Text style = {styles.musicTitleText}>{props.nowTrackInfo?.title}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.musicArtistWrapper}>
                            <TouchableOpacity>
                                <Text style = {styles.musicArtistText}>{props.nowTrackInfo?.artist}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {styles.lyricsWrapper}>
                        <Text>가사입니다.</Text>
                    </View>
                </View>
            </SafeAreaView>
        </GestureDetector>
    );
};

export default PlayingPresenter;
