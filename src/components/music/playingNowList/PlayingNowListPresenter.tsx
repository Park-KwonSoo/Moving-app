import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import styles from './PlayingNowListStyled';


interface PlayingNowListProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}
const PlayingNowListPresenter = ({ navigation, route }: PlayingNowListProps) => {

    return (
        <SafeAreaView style = {styles.container}>
            <Text>현재 재생중인 음악의 플레이리스트</Text>
        </SafeAreaView>
    );
};

export default PlayingNowListPresenter;
