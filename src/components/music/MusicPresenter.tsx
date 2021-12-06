import React, { Dispatch, SetStateAction } from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

import styles from './MusicStyled';


interface MusicProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;

    nowComponent : string | undefined;
    setNowComponent : Dispatch<SetStateAction<string | undefined>>;

    children? : React.ReactChild | React.ReactChild[];
}
const MusicPresenter = ({ navigation, route, children, ...props } :MusicProps) => {
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.iosSlideBar}/>
            <View style = {styles.headerWrapper}>
                <TouchableOpacity
                    style = {styles.headerButton}
                    disabled = {props.nowComponent === 'Playing'}
                    onPress = {() => {
                        props.setNowComponent('Playing');
                    }}
                >
                    <Text
                        style = {
                            props.nowComponent === 'Playing' ?
                            styles.me :
                            styles.notMe
                        }
                    >현재 재생 곡</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.headerButton}
                    disabled = {props.nowComponent === 'PlayingNowList'}
                    onPress = {() => {
                        props.setNowComponent('PlayingNowList');
                    }}
                >
                    <Text
                        style = {
                            props.nowComponent === 'PlayingNowList' ?
                            styles.me :
                            styles.notMe
                        }
                    >현재 재생 중인 목록</Text>
                </TouchableOpacity>
            </View>
            {children}
        </SafeAreaView>
    );
};

export default MusicPresenter;
