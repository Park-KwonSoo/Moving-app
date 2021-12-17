import React, { useEffect, useState } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';
import { Playlist, RootStackParamList } from '../../config/interface';

import PlaylistPresenter from './PlaylistPresenter';
import Header from '../base/header';
import PlayingPopupContainer from '../base/playingPopup';


interface PlaylistProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}
const PlaylistContainer = ({ navigation, route, ...props } : PlaylistProps ) => {

    //현재 로그인한 유저의 플레이리스트 목록을 가져옴
    const [myPlaylist, setMyPlaylist] = useState<Playlist[]>([]);

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () : Promise<void> => {
                setMyPlaylist([
                    {
                        playlistId : 1,
                        playlistName : '가요',
                        playlistTrackCount : 5,
                        playlistCover : 'https://images.genius.com/a31d79c5da743e13480e5e9de693d5ce.1000x1000x1.jpg',
                    },
                    {
                        playlistId : 2,
                        playlistName : '팝',
                        playlistTrackCount : 7,
                        playlistCover : 'https://image.bugsm.co.kr/album/images/1000/8673/867317.jpg',
                    },
                ]);
            };

            fetchData();
        }, [])
    );

    const onGoPlaylistDetail = (playListId : number) : void => {
        navigation.navigate('TabNavigator' as never, {
            screen : 'PlayListDetailScreen',
            params : {
                playlistId : playListId,
            },
        } as never);
    };


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

            myPlaylist = {myPlaylist}
            onGoPlaylistDetail = {onGoPlaylistDetail}
        />
        <PlayingPopupContainer
            navigation = {navigation}
            route = {route}
        />
        </>
    );
};

export default PlaylistContainer;
