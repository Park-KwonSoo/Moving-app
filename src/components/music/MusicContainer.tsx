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
    route : RouteProp<{}>;
}
const MusicContainer = ({ navigation, route } : MusicProps) => {

    const [nowTrackInfo, setNowTrackInfo] = useState<Track | null>(null);
    const [playingState, setPlayingState] = useState<boolean>(false);
    const [nowComponent, setNowComponent] = useState<string | undefined | never>('');

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                const nowTrack = await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack());
                setNowTrackInfo(nowTrack);
                setNowComponent(route.params.name);
                console.log(route.params.name);
            };
            fetchData();
        }, [route])
    );

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

    //이전곡 버튼
    const onPrevButton = () => {
        TrackPlayer.stop()
            .then(() => {
                TrackPlayer.skipToPrevious()
                .then(async () => {
                    setNowTrackInfo(await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack()));
                });
            });
    };

    //다음곡 버튼
    const onNextButton = () => {
        TrackPlayer.stop()
            .then(() => {
                TrackPlayer.skipToNext()
                .then(async () => {
                    setNowTrackInfo(await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack()));
                });
            });

    };


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
        >
            {
                nowComponent === 'Playing' ?
                <Playing
                    navigation = {navigation}
                    route = {route}

                    nowTrackInfo = {nowTrackInfo}
                    playingState = {playingState}

                    onPlayAndPauseButton = {onPlayAndPauseButton}
                    onPrevButton = {onPrevButton}
                    onNextButton = {onNextButton}
                /> :
                <PlayingNowList
                    navigation = {navigation}
                    route = {route}

                    nowTrackInfo = {nowTrackInfo}
                    playingState = {playingState}

                    onPlayAndPauseButton = {onPlayAndPauseButton}
                    onPrevButton = {onPrevButton}
                    onNextButton = {onNextButton}
                />
            }
        </MusicPresenter>
    );

};

export default MusicContainer;
