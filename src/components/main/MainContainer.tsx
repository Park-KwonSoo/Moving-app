import React, { useEffect } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';
import TrackPlayer, { RepeatMode } from 'react-native-track-player';

import MainPresenter from './MainPresenter';
import PlayingPopupContainer from '../base/playingPopup';


interface MainProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const MainContainer = ({ navigation, route, ...props } : MainProps ) => {

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                const trackQueue = await TrackPlayer.getQueue();
                if (!trackQueue.length) {
                    let trackIndex : number = trackQueue.length;    //키값
                    await TrackPlayer.add([
                        {
                            url : require('../../../assets/music/1.m4a'),
                            title : '임시용',
                            artist : '박권수',
                            contentType : 'audio/m4a',
                            index : trackIndex++,
                        },
                        {
                            url : require('../../../assets/music/1.m4a'),
                            title : '두번째곡입니당당',
                            artist : '박권수입니다람쥐',
                            contentType : 'audio/m4a',
                            index : trackIndex++,
                        },
                    ]);
                    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
                }
            };
            fetchData();
        }, [])
    );

    return (
        <>
        <MainPresenter
            navigation = {navigation}
            route = {route}
        />
        <PlayingPopupContainer
            navigation = {navigation}
            route = {route}
        />
        </>
    );
};

export default MainContainer;
