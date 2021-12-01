import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import {
    TouchableOpacity,
    Text,
} from 'react-native';

import styles from './PlayingPopupStyled';


interface PlayingPopupProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}
const PlayingPopupPresenter = ({ navigation, route, ...props } : PlayingPopupProps) => {
    return (
        <TouchableOpacity style = {styles.container}>
            <Text>음악재생중</Text>
        </TouchableOpacity>
    );
};

export default PlayingPopupPresenter;
