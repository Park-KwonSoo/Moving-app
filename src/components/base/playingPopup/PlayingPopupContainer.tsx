import React, { useEffect, useState } from 'react';
import { NavigationProp, RouteProp, useFocusEffect } from '@react-navigation/native';
import { RootStackParamList } from '../../../config/interface';

import { onPlayOrPause, onNext, onPrev } from '../../../util/TrackPlayerUtil';
import TrackPlayer, {
    Track,
    State,
    useProgress,
    useTrackPlayerEvents,
    Event as TrackPlayerEvent,
 } from 'react-native-track-player';

import PlayingPopupPresenter from './PlayingPopupPresenter';



interface PlayingPopupProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}> | RouteProp<RootStackParamList, 'PlayListDetailScreen'>;
}

const PlayingPopupContainer = ({ navigation, route, ...props } : PlayingPopupProps) => {

    const [nowTrackInfo, setNowTrackInfo] = useState<Track | undefined>();
    const [playingState, setPlayingState] = useState<State>(State.Paused);

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
            const fetchData = async() => {
                const currentTrack = await TrackPlayer.getCurrentTrack();
                setNowTrackInfo(currentTrack !== null ? await TrackPlayer.getTrack(currentTrack) : undefined);
                setPlayingState(await TrackPlayer.getState());
            };
            fetchData();
        }, [])
    );


    //다음 곡 재생 버튼
    const onNextButton = async () : Promise<void> => {
        setNowTrackInfo(await onNext(playingState));
    };

    //이전 곡 재생 버튼
    const onPrevButton = async () : Promise<void> => {
        setNowTrackInfo(await onPrev(playingState));
    };

    //일시정지 및 재생 버튼
    const onPlayAndPauseButton = async () : Promise<void> => {
        setPlayingState(await onPlayOrPause());
    };

    //현재 재생중인 곡 상세 정보 이동 버튼
    const onGoPlayingNowButton = () : void => {
        navigation.navigate('MusicNavigator' as never, {
            name : 'Playing',
        } as never);
    };

    //현재 재생중인 목록 컴포넌트로 이동 버튼
    const onGoPlayingNowListButton = () : void => {
        navigation.navigate('MusicNavigator' as never, {
            name : 'PlayingNowList',
        } as never);
    };



    useEffect(() => {
        return () => {};
    }, []);

    return (
        <PlayingPopupPresenter
            navigation = {navigation}
            route = {route}

            nowTrackInfo = {nowTrackInfo}
            playingState = {playingState}
            progress = {progress}

            onNextButton = {onNextButton}
            onPrevButton = {onPrevButton}
            onPlayAndPauseButton = {onPlayAndPauseButton}
            onGoPlayingNowListButton = {onGoPlayingNowListButton}
            onGoPlayingNowButton = {onGoPlayingNowButton}
        />
    );
};

export default PlayingPopupContainer;
