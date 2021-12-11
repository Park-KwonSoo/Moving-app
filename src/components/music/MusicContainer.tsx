import React, { useEffect, useState } from 'react';
import { useFocusEffect, NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../config/interface';

import { onPlayOrPause, onNext, onPrev } from '../../util/TrackPlayerUtil';
import useAsyncStorage from '../../util/useAsyncStorage';

import TrackPlayer, {
    Track,
    RepeatMode,
    State,
    useProgress,
    useTrackPlayerEvents,
    Event as TrackPlayerEvent,
} from 'react-native-track-player';

import {
    Gesture,
    GestureTouchEvent,
} from 'react-native-gesture-handler';

import SystemSetting from 'react-native-system-setting';

import MusicPresenter from './MusicPresenter';
import PlayingNowList from './playingNowList';
import Playing from './playing';



interface MusicProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<RootStackParamList, 'MusicNavigator'>;
}
const MusicContainer = ({ navigation, route, ...props } : MusicProps) => {

    const [storedLoopMode, setStoredLoopMode] = useAsyncStorage('loopMode', String(RepeatMode.Off));
    const [storedShuffleMode, setStoredShuffleMode] = useAsyncStorage('shuffleMode', 'false');

    const [nowComponent, setNowComponent] = useState<string | undefined | never>('');

    const [nowTrackInfo, setNowTrackInfo] = useState<Track | undefined>();
    const [nowTrackQueue, setNowTrackQueue] = useState<Track[]>([]);
    const [playingState, setPlayingState] = useState<State>(State.Paused);
    const [loopMode, setLoopMode] = useState<RepeatMode>(RepeatMode.Off);
    const [shuffleMode, setShuffleMode] = useState<boolean>(false);

    const progress = useProgress(100);

    //트랙 플레이어의 상태가 바뀌었을 때
    useTrackPlayerEvents([
        TrackPlayerEvent.PlaybackState,
        TrackPlayerEvent.PlaybackQueueEnded,
        TrackPlayerEvent.PlaybackTrackChanged,
    ], async(event : any) => {

        if (event.type === TrackPlayerEvent.PlaybackState) {
        }

        if (event.type === TrackPlayerEvent.PlaybackTrackChanged) {
            setNowTrackInfo(await TrackPlayer.getTrack(event.nextTrack));
        }
    });

    useFocusEffect(
        React.useCallback(() => {
            //fetchData 함수
            const fetchData = async () : Promise<void> => {
                setNowComponent(route.params.name);
                setNowTrackInfo(await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack()));
                setNowTrackQueue(await TrackPlayer.getQueue());
                setPlayingState(await TrackPlayer.getState());
            };

            fetchData();
        }, [route])
    );


    //다음곡 버튼
    const onNextButton = async() : Promise<void> => {
        setNowTrackInfo(await onNext(playingState));
    };

    //이전곡 버튼
    const onPrevButton = async () : Promise<void> => {
        setNowTrackInfo(await onPrev(playingState));
    };


    //재생 및 정지 버튼
    const onPlayAndPauseButton = async () : Promise<void> => {
        setPlayingState(await onPlayOrPause());
    };

    //현재 재생중인 목록에서 선택 곡으로 음악 재생
    const onPlayThisMusic = async (item : Track) : Promise<void> => {
        const index = nowTrackQueue.indexOf(item);

        await TrackPlayer.skip(index);
        await TrackPlayer.play();

        setNowTrackInfo(await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack()));
        setPlayingState(State.Playing);
    };

    //반복 모드를 설정
    const onLoopChange = async () : Promise<void> => {
        //꺼진 상태에서 클릭 -> 한곡 재생
        if (loopMode === RepeatMode.Off) {
            await TrackPlayer.setRepeatMode(RepeatMode.Track);
            setLoopMode(RepeatMode.Track);
            setStoredLoopMode(String(RepeatMode.Track));
        }

        //한곡 재생에서 클릭 -> 전체 재생
        else if (loopMode === RepeatMode.Track) {
            await TrackPlayer.setRepeatMode(RepeatMode.Queue);
            setLoopMode(RepeatMode.Queue);
            setStoredLoopMode(String(RepeatMode.Queue));
        }

        //전체 재생에서 클릭 -> 반복 끔
        else if (loopMode === RepeatMode.Queue) {
            await TrackPlayer.setRepeatMode(RepeatMode.Off);
            setLoopMode(RepeatMode.Off);
            setStoredLoopMode(String(RepeatMode.Off));
        }
    };

    //섞기 모드를 설정
    const onShuffleChange = async () : Promise<void> => {
        //toDo : Shuffle Mode 설정하기
        const changeMode = !shuffleMode;
        setShuffleMode(changeMode);
        setStoredShuffleMode(String(changeMode));
    };

    //제스처를 이용하여 볼륨을 컨트롤
    const onGestureVolumeControl =
        Gesture.Manual()
        .enabled(true)
        .onTouchesMove((data : GestureTouchEvent) => {
            SystemSetting.setVolume(1);
            console.log(data.changedTouches[0].y);
        });


    useEffect(() => {
        setLoopMode(parseInt(storedLoopMode, 10));
        setShuffleMode(storedShuffleMode === 'true');
    }, [storedLoopMode, storedShuffleMode]);

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

            playingState = {playingState}
            progress = {progress}

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

                    nowTrackInfo = {nowTrackInfo}

                    onGestureVolumeControl = {onGestureVolumeControl}
                /> :
                <PlayingNowList
                    navigation = {navigation}
                    route = {route}

                    nowTrackInfo = {nowTrackInfo}

                    nowTrackQueue = {nowTrackQueue}
                    onPlayThisMusic = {onPlayThisMusic}
                />
            }
        </MusicPresenter>
    );

};

export default MusicContainer;
