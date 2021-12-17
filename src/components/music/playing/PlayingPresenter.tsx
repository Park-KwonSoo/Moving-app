import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
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
    PanGesture,
} from 'react-native-gesture-handler';

import styles from './PlayingStyled';


interface PlayingProps extends MovingDefaultProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<RootStackParamList, 'MusicNavigator'>;

}
const PlayingPresenter = ({ navigation, route, ...props } : PlayingProps) => {
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.playingWrapper}>
                <View style = {styles.musicInfoWrapper}>
                    <GestureDetector>
                    <TouchableOpacity style = {styles.musicAlbumCoverWrapper}>
                        <Image style = {styles.musicAlbumCoverImg} source = {props.nowTrackInfo?.albumCover ? {url : props.nowTrackInfo?.albumCover} : require('../../../../assets/unknown.png')}/>
                    </TouchableOpacity>
                    </GestureDetector>

                    <View style = {styles.musicTitleWrapper}>
                        <TouchableOpacity>
                            <Text style = {styles.musicTitleText}>{props.nowTrackInfo?.title && props.nowTrackInfo.title.length > 22 ? `${props.nowTrackInfo.title.slice(0, 22)}...` : props.nowTrackInfo?.title}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.musicArtistWrapper}>
                        <TouchableOpacity>
                            <Text style = {styles.musicArtistText}>{props.nowTrackInfo?.artist && props.nowTrackInfo.artist.length > 22 ? `${props.nowTrackInfo.artist.slice(0, 22)}...` : props.nowTrackInfo?.artist}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.lyricsWrapper}>
                    <Text style = {styles.lyricsText}>가사입니다.</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PlayingPresenter;
