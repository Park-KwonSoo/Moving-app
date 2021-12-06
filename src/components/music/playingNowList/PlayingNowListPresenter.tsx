import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Track } from 'react-native-track-player';

import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import {
    GestureDetector,
} from 'react-native-gesture-handler';

import styles from './PlayingNowListStyled';


interface PlayingNowListProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;

    nowTrackInfo : Track | null;
    playingState : boolean;
    onPlayAndPauseButton : () => void;
    onPrevButton : () => void;
    onNextButton : () => void;
}
const PlayingNowListPresenter = ({ navigation, route, ...props }: PlayingNowListProps) => {
    return (
        <GestureDetector>
           <SafeAreaView style = {styles.container}>
                <View style = {styles.topButtonWrapper}>
                    <TouchableOpacity
                        style = {styles.topButton}
                    >
                        <Text style = {styles.topButtonTxt}>선택</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.topButton}
                    >
                        <Text style = {styles.topButtonTxt}>검색</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </GestureDetector>
    );
};

export default PlayingNowListPresenter;
