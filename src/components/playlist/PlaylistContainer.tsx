import React, { useEffect, useState } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';
import TrackPlayer, {
    Track,
    State,
    RepeatMode,
} from 'react-native-track-player';

import PlaylistPresenter from './PlaylistPresenter';
import PlayingPopupContainer from '../base/playingPopup';


interface PlaylistProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const PlaylistContainer = ({ navigation, route, ...props } : PlaylistProps ) => {

    const [nowTrackInfo, setNowTrackInfo] = useState<Track | undefined>(undefined);
    const [playingState, setPlayingState] = useState<boolean>(false);

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () : Promise<void> => {
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

    return (
        <>
        <PlaylistPresenter
            navigation = {navigation}
            route = {route}
        />
        <PlayingPopupContainer
            navigation = {navigation}
            route = {route}

            nowTrackInfo = {nowTrackInfo}
            setNowTrackInfo = {setNowTrackInfo}
            playingState = {playingState}
            setPlayingState = {setPlayingState}
        />
        </>
    );
};

export default PlaylistContainer;
