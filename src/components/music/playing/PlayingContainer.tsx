import React, { useEffect, useState } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';

import PlayingPresenter from './PlayingPresenter';

import useAsyncStorage from '../../../util/useAsyncStorage';
import TrackPlayer, {
    Track,
    State,
    Event as TrackPlayerEvent,
    RepeatMode,
} from 'react-native-track-player';



interface PlayingProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const PlayingContainer = ({ navigation, route } : PlayingProps) => {

    const [playingState, setPlayingState] = useState<boolean>(false);
    const [nowTrackInfo, setNowTrackInfo] = useState<Track | null>(null);


    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                //toDo : playing을 가져와서 앨범아트로 세팅 등
                TrackPlayer.addEventListener(TrackPlayerEvent.PlaybackState, async (data : any) => {
                    data.state === State.Playing ? setPlayingState(true) : setPlayingState(false);
                });
                TrackPlayer.addEventListener(TrackPlayerEvent.PlaybackQueueEnded, async (data : any) => {
                    console.log(data);
                });
                TrackPlayer.addEventListener(TrackPlayerEvent.PlaybackError, async (data : any) => {
                    console.log(data);
                });
                TrackPlayer.setRepeatMode(RepeatMode.Track);
                await TrackPlayer.add({
                    url : require('../../../../assets/music/1.m4a'),
                    title : '임시용',
                    artist : '박권수',
                    contentType : 'audio/m4a',
                });

                // console.log(await TrackPlayer.getQueue());
                // console.log(await TrackPlayer.getState());
                // await TrackPlayer.play();
                // console.log(await TrackPlayer.getState(), State.Playing);
                // await TrackPlayer.getState() === State.Playing ? setPlayingState(true) : setPlayingState(false);
            };

            fetchData();

            return () => {
                TrackPlayer.pause();
            };

        }, [])
    );


    const onPlayingButton = () => {
        playingState ? TrackPlayer.pause() : TrackPlayer.play();
    };

    const onPrevButton = async () => {
        await TrackPlayer.skipToPrevious();
    };

    const onNextButton = async () => {
        await TrackPlayer.skipToNext();
    };

    return (
        <PlayingPresenter
            navigation = {navigation}
            route = {route}

            nowTrackInfo = {nowTrackInfo}
            playingState = {playingState}
            onPlayingButton = {onPlayingButton}
            onPrevButton = {onPrevButton}
            onNextButton = {onNextButton}
        />
    );
};

export default PlayingContainer;
