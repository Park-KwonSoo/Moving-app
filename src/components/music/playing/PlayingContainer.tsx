import React, { useEffect, useState } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';

import PlayingPresenter from './PlayingPresenter';

import useAsyncStorage from '../../../util/useAsyncStorage';
import TrackPlayer, { State } from 'react-native-track-player';



type PlayingInfo = {
    imageUrl : string;
    title : string;
    artist : string;
    length : string;
};

interface PlayingProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const PlayingContainer = ({ navigation, route } : PlayingProps) => {

    const [playing, setPlaying] = useAsyncStorage('playing', '');

    const [playingState, setPlayingState] = useState<boolean>(false);
    const [playingInfo, setPlayingInfo] = useState<PlayingInfo | null>(null);


    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                //toDo : playing을 가져와서 앨범아트로 세팅 등
                await TrackPlayer.getState() === State.Playing ? setPlayingState(true) : setPlayingState(false);
            };
            fetchData();
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

            playingInfo = {playingInfo}
            playingState = {playingState}
            onPlayingButton = {onPlayingButton}
            onPrevButton = {onPrevButton}
            onNextButton = {onNextButton}
        />
    );
};

export default PlayingContainer;
