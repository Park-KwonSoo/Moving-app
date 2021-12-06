import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Track } from 'react-native-track-player';

import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import {
    GestureDetector,
} from 'react-native-gesture-handler';

import styles from './PlayingStyled';


interface PlayingProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{
        params : {
            name : string
        }
    }, 'params'>;

    nowTrackInfo : Track | undefined;
}
const PlayingPresenter = ({ navigation, route, ...props } : PlayingProps) => {
    return (
        <GestureDetector>
            <SafeAreaView style = {styles.container}>
                <View style = {styles.playingWrapper}>
                    <View style = {styles.musicInfoWrapper}>
                        <View style = {styles.musicAlbumCoverWrapper}>
                            <Image style = {styles.musicAlbumCoverImg} source = {require('../../../../assets/play.png')}/>
                        </View>
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
