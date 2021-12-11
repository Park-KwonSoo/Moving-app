import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import {
    Gesture,
    GestureDetector,
} from 'react-native-gesture-handler';

import styles from './PlayingModeModalStyle';


interface PlayingModeModalProps {
    modalDirection : string
    modalLocation : {
        x : number;
        y: number;
    };
}
const PlayingModeModalPresenter = (props : PlayingModeModalProps) => {
    return (
        props.modalDirection === 'left' ?
        <View style = {{...styles.container, top : props.modalLocation.y, right : props.modalLocation.x - 100}}>
            <GestureDetector gesture = {
                Gesture.Pan()
                .onBegin(() => { console.log(' hiasdhis ' );})
            }>
            <View style = {styles.modalWrapper}>
                <Text>{props.modalDirection}</Text>
                <Text>{props.modalLocation.x}</Text>
                <Text>{props.modalLocation.y}</Text>
            </View>
            </GestureDetector>
        </View>

        :
        <View style = {{...styles.container, top : props.modalLocation.y, left : props.modalLocation.x + 100}}>
            <GestureDetector gesture = {
                Gesture.Pan()
                .onBegin(() => { console.log(' hiasdhis ' );})
            }>
            <View style = {styles.modalWrapper}>
                <Text>{props.modalDirection}</Text>
                <Text>{props.modalLocation.x}</Text>
                <Text>{props.modalLocation.y}</Text>
            </View>
            </GestureDetector>
        </View>
    );
};

export default PlayingModeModalPresenter;
