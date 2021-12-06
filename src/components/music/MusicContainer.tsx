import React, { useEffect, useState } from 'react';
import { useFocusEffect,  NavigationProp, RouteProp } from '@react-navigation/native';

import useAsyncStorage from '../../util/useAsyncStorage';
import TrackPlayer, {
    Track,
    State,
    Event as TrackPlayerEvent,
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



    useFocusEffect(
        React.useCallback(() => {
            //fetchData 함수
            const fetchData = async () => {
                setNowComponent(route.params.name);
                const nowTrack = await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack());
                setNowTrackInfo(nowTrack);
                setNowTrackQueue(await TrackPlayer.getQueue());
                //현재 재생중 상태 확인
                const currentState = await TrackPlayer.getState();
                setPlayingState(currentState === State.Playing ? true : false);
            };

            fetchData();
        }, [route])
    );


    //다음곡 버튼
    const onNextButton = () => {
        TrackPlayer.skipToNext()
        .then(async () => {
            if (playingState) {
                await TrackPlayer.play();
            } else {
                await TrackPlayer.pause();
            }
            setNowTrackInfo(await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack()));
        });
    };

    //이전곡 버튼
    const onPrevButton = () => {
        TrackPlayer.getPosition()
        .then(async (position : number) => {
            //만약 재생한지 3초가 지났다면 현재 곡을 다시 재생한다.
            if (position >= 3) {
                TrackPlayer.seekTo(0);
            }

            //재생한지 3초 미만이면 바로 이전곡을 재생함.
            else {
                const isNotFirst : number = await TrackPlayer.getCurrentTrack();

                //만약 첫번째 곡이 아니라면 이전 곡을 재생
                if (isNotFirst) {
                    TrackPlayer.skipToPrevious()
                    .then(async () => {
                        if (playingState) {
                            await TrackPlayer.play();
                        } else {
                            await TrackPlayer.pause();
                        }
                        setNowTrackInfo(await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack()));
                    });
                }
                //만약 첫번째 곡이라면 마지막 곡을 재생
                else {
                    const queue = await TrackPlayer.getQueue();
                    TrackPlayer.skip(queue.length - 1)
                    .then(async() => {
                        if (playingState) {
                            await TrackPlayer.play();
                        } else {
                            await TrackPlayer.pause();
                        }
                        setNowTrackInfo(await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack()));
                    });
                }
            }
        });
    };


    //재생 및 정지 버튼
    const onPlayAndPauseButton = async () => {
        const _playingStatus : State = await TrackPlayer.getState();
        if (_playingStatus === State.Playing || _playingStatus ===  State.Buffering) {
            await TrackPlayer.pause();
            setPlayingState(false);
        } else {
            await TrackPlayer.play();
            setPlayingState(true);
        }
    };

    //현재 재생중인 목록에서 선택 곡으로 음악 재생
    const onPlayThisMusic = async (index : number) => {
        await TrackPlayer.skip(index);
        setPlayingState(true);
        setNowTrackInfo(await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack()));
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
