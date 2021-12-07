import React, { useEffect, useState } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';
import TrackPlayer, {
    Track,
    State,
    RepeatMode,
} from 'react-native-track-player';

import MusicChartPresenter from './MusicChartPresenter';
import PlayingPopupContainer from '../base/playingPopup';


interface MusicChartProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const MusicChartContainer = ({ navigation, route, ...props } : MusicChartProps ) => {

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
        <MusicChartPresenter
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

export default MusicChartContainer;
