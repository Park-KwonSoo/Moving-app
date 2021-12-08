import React, { useEffect, useState } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';
import { MovingDefaultProps, Playlist } from '../../config/interface';

import * as MusicUtil from '../../util/TrackPlayerUtil';

import PlaylistPresenter from './PlaylistPresenter';
import Header from '../base/header';
import PlayingPopupContainer from '../base/playingPopup';


interface PlaylistProps extends MovingDefaultProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const PlaylistContainer = ({ navigation, route, ...props } : PlaylistProps ) => {

    //현재 로그인한 유저의 플레이리스트 목록을 가져옴
    const [myPlaylist, setMyPlaylist] = useState<Playlist[]>([]);

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () : Promise<void> => {
            };

            fetchData();
        }, [])
    );

    return (
        <>
        <Header
            navigation = {navigation}
            route = {route}
            header = "내 보관함"
        />
        <PlaylistPresenter
            navigation = {navigation}
            route = {route}
        />
        <PlayingPopupContainer
            navigation = {navigation}
            route = {route}

            {...props}
        />
        </>
    );
};

export default PlaylistContainer;
