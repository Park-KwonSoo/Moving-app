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

import styles from './PlayingStyled';



interface PlayingProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;

    nowTrackInfo : Track | null;
    playingState : boolean;
    onPlayingButton : () => void;
    onPrevButton : () => void;
    onNextButton : () => void;
}

const PlayingPresenter = ({ navigation, route, ...props } : PlayingProps) => {
    return (
        <SafeAreaView style = {styles.container}>
            <Text>현재 재생중인 페이지 컴포넌트</Text>
        </SafeAreaView>
    );
};

export default PlayingPresenter;
