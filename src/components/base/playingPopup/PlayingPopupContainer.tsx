import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import PlayingPopupPresenter from './PlayingPopupPresenter';

import { onPlayOrPause, onNext, onPrev } from '../../../util/TrackPlayerUtil';
import TrackPlayer, {
    Track,
} from 'react-native-track-player';



interface PlayingPopupProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;

    nowTrackInfo : Track | undefined;
    setNowTrackInfo : Dispatch<SetStateAction<Track | undefined>>;

    playingState : boolean;
    setPlayingState : Dispatch<SetStateAction<boolean>>;
}

const PlayingPopupContainer = ({ navigation, route, ...props } : PlayingPopupProps) => {

    const [playingTime, setPlayingTime] = useState<number>(0);

    //다음 곡 재생 버튼
    const onNextButton = async () : Promise<void> => {
        props.setNowTrackInfo(await onNext(props.playingState));
    };

    //이전 곡 재생 버튼
    const onPrevButton = async () : Promise<void> => {
        props.setNowTrackInfo(await onPrev(props.playingState));
    };

    //일시정지 및 재생 버튼
    const onPlayAndPauseButton = async () : Promise<void> => {
        props.setPlayingState(await onPlayOrPause());
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


    //상태변화 감지
    useEffect(() => {
        TrackPlayer.getDuration()
        .then((duration : number) => {
            TrackPlayer.getPosition()
            .then((position : number) => {
                setPlayingTime((position / duration) * 100);
            });
        });
    }, [props.nowTrackInfo, props.playingState, playingTime]);

    useEffect(() => {
        return () => {};
    }, []);

    return (
        <PlayingPopupPresenter
            navigation = {navigation}
            route = {route}

            nowTrackInfo = {props.nowTrackInfo}
            playingState = {props.playingState}
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
