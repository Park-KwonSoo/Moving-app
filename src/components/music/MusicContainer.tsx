import React, { useEffect, useState } from 'react';
import { useFocusEffect, NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { MovingDefaultProps, RootStackParamList } from '../../config/interface';

import { onPlayOrPause, onNext, onPrev } from '../../util/TrackPlayerUtil';

import TrackPlayer, {
    Track,
    State,
    RepeatMode,
} from 'react-native-track-player';

import {
    Gesture,
    GestureTouchEvent,
} from 'react-native-gesture-handler';

import SystemSetting from 'react-native-system-setting';

import MusicPresenter from './MusicPresenter';
import PlayingNowList from './playingNowList';
import Playing from './playing';



interface MusicProps extends MovingDefaultProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<RootStackParamList, 'MusicNavigator'>;
}
const MusicContainer = ({ navigation, route, ...props } : MusicProps) => {

    const [playingTime, setPlayingTime] = useState<number>(0);
    const [nowComponent, setNowComponent] = useState<string | undefined | never>('');

    const [loopMode, setLoopMode] = useState<RepeatMode>(RepeatMode.Off);
    const [shuffleMode, setShuffleMode] = useState<boolean>(false);


    useFocusEffect(
        React.useCallback(() => {
            //fetchData 함수
            const fetchData = async () : Promise<void> => {
                setNowComponent(route.params.name);

                //현재 반복 모드로 설정
                const repeatMode = await TrackPlayer.getRepeatMode();
                setLoopMode(repeatMode);

            };

            fetchData();
        }, [route])
    );


    //다음곡 버튼
    const onNextButton = async() : Promise<void> => {
        props.setNowTrackInfo(await onNext(props.playingState));
    };

    //이전곡 버튼
    const onPrevButton = async () : Promise<void> => {
        props.setNowTrackInfo(await onPrev(props.playingState));
    };


    //재생 및 정지 버튼
    const onPlayAndPauseButton = async () : Promise<void> => {
        props.setPlayingState(await onPlayOrPause());
    };

    //현재 재생중인 목록에서 선택 곡으로 음악 재생
    const onPlayThisMusic = async (item : Track) : Promise<void> => {
        const index = props.nowTrackQueue.indexOf(item);

        await TrackPlayer.skip(index);
        await TrackPlayer.play();
        props.setPlayingState(State.Playing);

        props.setNowTrackInfo(await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack()));
    };

    //반복 모드를 설정
    const onLoopChange = async () : Promise<void> => {
        //꺼진 상태에서 클릭 -> 한곡 재생
        if (loopMode === RepeatMode.Off) {
            await TrackPlayer.setRepeatMode(RepeatMode.Track);
            setLoopMode(RepeatMode.Track);
        }

        //한곡 재생에서 클릭 -> 전체 재생
        else if (loopMode === RepeatMode.Track) {
            await TrackPlayer.setRepeatMode(RepeatMode.Queue);
            setLoopMode(RepeatMode.Queue);
        }

        //전체 재생에서 클릭 -> 반복 끔
        else if (loopMode === RepeatMode.Queue) {
            await TrackPlayer.setRepeatMode(RepeatMode.Off);
            setLoopMode(RepeatMode.Off);
        }
    };

    //섞기 모드를 설정
    const onShuffleChange = async () : Promise<void> => {
        //toDo : Shuffle Mode 설정하기
        setShuffleMode(!shuffleMode);
    };

    //제스처를 이용하여 볼륨을 컨트롤
    const onGestureVolumeControl =
        Gesture.Manual()
        .enabled(true)
        .onTouchesMove((data : GestureTouchEvent) => {
            SystemSetting.setVolume(1);
            console.log(data.changedTouches[0].y);
        });



    //상태변화 감지
    useEffect(() => {
        // TrackPlayer.getDuration()
        // .then((duration : number) => {
        //     TrackPlayer.getPosition()
        //     .then((position : number) => {
        //         setPlayingTime((position / duration) * 100);
        //     });
        // });
    }, [props.playingState, props.nowTrackInfo, playingTime]);



    useEffect(() => {
        setNowComponent(route.params.name);
    }, [route]);

    useEffect(() => {
        return () => {};
    }, []);


    return (
        <MusicPresenter
            navigation = {navigation}
            route = {route}

            nowComponent = {nowComponent}
            setNowComponent = {setNowComponent}

            playingState = {props.playingState}
            playingTime = {playingTime}

            onPlayAndPauseButton = {onPlayAndPauseButton}
            onPrevButton = {onPrevButton}
            onNextButton = {onNextButton}

            loopMode = {loopMode}
            onLoopChange = {onLoopChange}

            shuffleMode = {shuffleMode}
            onShuffleChange = {onShuffleChange}
        >
            {
                nowComponent === 'Playing' ?
                <Playing
                    navigation = {navigation}
                    route = {route}

                    nowTrackInfo = {props.nowTrackInfo}

                    onGestureVolumeControl = {onGestureVolumeControl}
                /> :
                <PlayingNowList
                    navigation = {navigation}
                    route = {route}

                    nowTrackInfo = {props.nowTrackInfo}

                    nowTrackQueue = {props.nowTrackQueue}
                    onPlayThisMusic = {onPlayThisMusic}
                />
            }
        </MusicPresenter>
    );

};

export default MusicContainer;
