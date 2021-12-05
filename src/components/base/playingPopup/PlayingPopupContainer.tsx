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

    const [nowTrackInfo, setNowTrackInfo] = useState<Track | null>(null);
    const [playingStatus, setPlayingStatus] = useState<boolean>(false);
    const [playingTime, setPlayingTime] = useState<number>(0.00);


    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                const queue : any[] = await TrackPlayer.getQueue();
                if (queue.length) {
                    const currentTrackIndex : number = await TrackPlayer.getCurrentTrack();
                    setNowTrackInfo(queue[currentTrackIndex]);

                    const currentStatus : State = await TrackPlayer.getState();
                    console.log(currentStatus);
                    setPlayingStatus(currentStatus === State.Playing ? true : false);
                }
            };

            fetchData();
        }, [])
    );


    //다음 곡 재생 버튼
    const onNextButton = () => {
        TrackPlayer.stop()
            .then(() => {
                TrackPlayer.skipToNext()
                .then(async () => {
                    setNowTrackInfo(await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack()));
                });
            });

    };

    //이전 곡 재생 버튼
    const onPrevButton = () => {
        TrackPlayer.stop()
            .then(() => {
                TrackPlayer.skipToPrevious()
                .then(async () => {
                    setNowTrackInfo(await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack()));
                });
            });

    };

    //일시정지 및 재생 버튼
    const onPlayAndPauseButton = async () => {
        const _playingStatus : State = await TrackPlayer.getState();
        if (_playingStatus === State.Playing || _playingStatus ===  State.Buffering) {
            await TrackPlayer.pause();
            setPlayingStatus(false);
        } else {
            await TrackPlayer.play();
            setPlayingStatus(true);
        }
    };

    //현재 재생중인 목록 컴포넌트로 이동 버튼
    const onGoPlayingNowListButton = () => {
        navigation.navigate('PlayingNowListNavigator' as never, {} as never);
    };

    //현재 재생중인 곡 상세 정보 이동 버튼
    const onGoPlayingNowButton = () => {
        navigation.navigate('PlayingNavigator' as never, {} as never);
    };


    //상태변화 감지
    useEffect(() => {

    }, [playingStatus, nowTrackInfo]);

    return (
        <PlayingPopupPresenter
            navigation = {navigation}
            route = {route}
            nowTrackInfo = {nowTrackInfo}
            playingStatus = {playingStatus}

            onNextButton = {onNextButton}
            onPrevButton = {onPrevButton}
            onPlayAndPauseButton = {onPlayAndPauseButton}
            onGoPlayingNowListButton = {onGoPlayingNowListButton}
            onGoPlayingNowButton = {onGoPlayingNowButton}
        />
    );
};

export default PlayingPopupContainer;
