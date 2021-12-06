import React, { useEffect, useState } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';

import PlayingPopupPresenter from './PlayingPopupPresenter';

import useAsyncStorage from '../../../util/useAsyncStorage';
import TrackPlayer, {
    Track,
    State,
} from 'react-native-track-player';



interface PlayingPopupProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const PlayingPopupContainer = ({ navigation, route } : PlayingPopupProps) => {

    const [nowTrackInfo, setNowTrackInfo] = useState<Track | undefined>(undefined);
    const [playingState, setPlayingState] = useState<boolean>(false);
    const [playingTime, setPlayingTime] = useState<number>(0);


    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                const queue : any[] = await TrackPlayer.getQueue();
                if (queue.length) {
                    const currentTrackIndex : number = await TrackPlayer.getCurrentTrack();
                    setNowTrackInfo(queue[currentTrackIndex]);

                    const currentStatus : State = await TrackPlayer.getState();
                    setPlayingState(currentStatus === State.Playing ? true : false);
                }
            };

            fetchData();
        }, [])
    );


    //다음 곡 재생 버튼
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

    //이전 곡 재생 버튼
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

    //일시정지 및 재생 버튼
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

    //현재 재생중인 곡 상세 정보 이동 버튼
    const onGoPlayingNowButton = () => {
        navigation.navigate('MusicNavigator' as never, {
            name : 'Playing',
        } as never);
    };

    //현재 재생중인 목록 컴포넌트로 이동 버튼
    const onGoPlayingNowListButton = () => {
        navigation.navigate('MusicNavigator' as never, {
            name : 'PlayingNowList',
        } as never);
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

    return (
        <PlayingPopupPresenter
            navigation = {navigation}
            route = {route}

            nowTrackInfo = {nowTrackInfo}
            playingState = {playingState}
            playingTime = {playingTime}

            onNextButton = {onNextButton}
            onPrevButton = {onPrevButton}
            onPlayAndPauseButton = {onPlayAndPauseButton}
            onGoPlayingNowListButton = {onGoPlayingNowListButton}
            onGoPlayingNowButton = {onGoPlayingNowButton}
        />
    );
};

export default PlayingPopupContainer;
