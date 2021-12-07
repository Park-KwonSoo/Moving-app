import React, { useEffect, useState } from 'react';
import { useFocusEffect,  NavigationProp, RouteProp } from '@react-navigation/native';

import { onPlayOrPause, onNext, onPrev } from '../../util/TrackPlayerUtil';
import TrackPlayer, {
    Track,
    State,
    RepeatMode,
} from 'react-native-track-player';
import { Gesture } from 'react-native-gesture-handler';

import MusicPresenter from './MusicPresenter';
import PlayingNowList from './playingNowList';
import Playing from './playing';



interface MusicProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{
        params : {
            name : string
        }
    }, 'params'>;
}
const MusicContainer = ({ navigation, route } : MusicProps) => {

    const [nowTrackInfo, setNowTrackInfo] = useState<Track | undefined>(undefined);
    const [nowTrackQueue, setNowTrackQueue] = useState<Track[]>([]);
    const [playingState, setPlayingState] = useState<boolean>(false);
    const [playingTime, setPlayingTime] = useState<number>(0);
    const [nowComponent, setNowComponent] = useState<string | undefined | never>('');

    const [loopMode, setLoopMode] = useState<RepeatMode>(RepeatMode.Off);
    const [shuffleMode, setShuffleMode] = useState<boolean>(false);


    useFocusEffect(
        React.useCallback(() => {
            //fetchData 함수
            const fetchData = async () : Promise<void> => {
                setNowComponent(route.params.name);
                const nowTrack = await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack());
                setNowTrackInfo(nowTrack);
                setNowTrackQueue(await TrackPlayer.getQueue());

                //현재 재생중 상태 확인
                const currentState = await TrackPlayer.getState();
                setPlayingState(currentState === State.Playing ? true : false);

                //현재 반복 모드로 설정
                const repeatMode = await TrackPlayer.getRepeatMode();
                setLoopMode(repeatMode);
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
        setPlayingState(true);

        setNowTrackInfo(await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack()));
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


    //상태변화 감지
    useEffect(() => {
        TrackPlayer.getDuration()
        .then((duration : number) => {
            TrackPlayer.getPosition()
            .then((position : number) => {
                setPlayingTime((position / duration) * 100);
            });
        });
    }, [playingState, nowTrackInfo, playingTime]);



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

                    nowTrackInfo = {nowTrackInfo}
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
