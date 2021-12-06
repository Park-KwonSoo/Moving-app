import React, { Dispatch, SetStateAction } from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';

import styles from './MusicStyled';


interface MusicProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{
        params : {
            name : string
        }
    }, 'params'>;

    nowComponent : string | undefined;
    setNowComponent : Dispatch<SetStateAction<string | undefined>>;

    children? : React.ReactChild | React.ReactChild[];

    playingState : boolean;
    playingTime : number;

    onPlayAndPauseButton : () => void;
    onPrevButton : () => void;
    onNextButton : () => void;
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
            <View style = {styles.footerWrapper}>
                <View style = {{...styles.musicBuffer, width : `${props.playingTime}%`}}/>
                <View style = {styles.controllerWrapper}>
                    <TouchableOpacity style = {styles.modeButton}>
                        <Image style = {styles.modeButtonImg} source = {require('../../../assets/pause.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress = {props.onPrevButton}
                        style = {styles.controlButton}
                    >
                        <Image style = {styles.controlButtomImg} source = {require('../../../assets/prev.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress = {props.onPlayAndPauseButton}
                        style = {styles.controlButton}
                    >
                        <Image style = {styles.controlButtomImg} source = {
                            props.playingState ?
                            require('../../../assets/pause.png') :
                            require('../../../assets/play.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress = {props.onNextButton}
                        style = {styles.controlButton}
                    >
                        <Image style = {styles.controlButtomImg} source = {require('../../../assets/next.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.modeButton}>
                        <Image style = {styles.modeButtonImg} source = {require('../../../assets/pause.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default MusicPresenter;
