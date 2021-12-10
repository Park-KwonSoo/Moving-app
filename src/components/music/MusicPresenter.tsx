import React, { Dispatch, SetStateAction } from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RepeatMode, State, ProgressState } from 'react-native-track-player';
import { RootStackParamList } from '../../config/interface';

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
    route : RouteProp<RootStackParamList, 'MusicNavigator'>;

    nowComponent : string | undefined;
    setNowComponent : Dispatch<SetStateAction<string | undefined>>;

    children? : React.ReactChild | React.ReactChild[];

    playingState : State;
    progress : ProgressState;

    onPlayAndPauseButton : () => void;
    onPrevButton : () => void;
    onNextButton : () => void;

    loopMode : RepeatMode;
    onLoopChange : () => void;

    shuffleMode : boolean;
    onShuffleChange : () => void;
}
const MusicPresenter = ({ navigation, route, children, ...props } : MusicProps) => {
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
                <View style = {{...styles.musicBuffer, width : `${props.progress.position > 0 ? (props.progress.position / props.progress.duration) * 100 : 0}%`}}/>
                <View style = {styles.controllerWrapper}>
                    <TouchableOpacity
                        onPress = {props.onLoopChange}
                        style = {styles.modeButton}
                    >
                        <Image style = {styles.modeButtonImg} source = {
                            props.loopMode === RepeatMode.Off ?
                            require('../../../assets/loop-unselect.png') :

                            props.loopMode === RepeatMode.Track ?
                            require('../../../assets/loop-one.png') :

                            require('../../../assets/loop-all.png')
                        }/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress = {props.onPrevButton}
                        style = {styles.controlButton}
                    >
                        <Image style = {styles.controlButtomImg} source = {require('../../../assets/prev.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress = {props.onPlayAndPauseButton}
                        style = {{ ...styles.controlButton, width : '17%' }}
                    >
                        <Image style = {styles.controlButtomImg} source = {
                            props.playingState === State.Playing ||  props.playingState === State.Buffering ?
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

                    <TouchableOpacity
                        onPress = {props.onShuffleChange}
                        style = {styles.modeButton}
                    >
                        <Image style = {styles.modeButtonImg} source = {
                            props.shuffleMode ?
                            require('../../../assets/shuffle-select.png') :
                            require('../../../assets/shuffle-unselect.png')
                        }/>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default MusicPresenter;
