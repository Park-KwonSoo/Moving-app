import React, { useEffect, useState } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';

import { addTrackToPlayingListToNext, addTrackToPlayingListToLast } from '../../util/TrackPlayerUtil';
import TrackPlayer, {
    Track,
    State,
    RepeatMode,
} from 'react-native-track-player';

import SearchPresenter from './SearchPresenter';
import PlayingPopupContainer from '../base/playingPopup';


interface SearchProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const SearchContainer = ({ navigation, route, ...props } : SearchProps ) => {

    const [nowTrackInfo, setNowTrackInfo] = useState<Track | undefined>(undefined);
    const [playingState, setPlayingState] = useState<boolean>(false);

    const [keyword, setKeyword] = useState<string | undefined>('');
    const [searchResult, setSearchResult] = useState<Track[]>([]);

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


    //keyword를 설정
    const onSetKeyword = (e : string) : void => {
        setKeyword(e);
    };

    //검색 버튼 클릭시 발생 이벤트 => 서버로부터 결과를 가져온다.
    const onSearchButton = async () : Promise<void> => {
        console.log(keyword);
        console.log(searchResult);
        await addTrackToPlayingListToNext({
            url : require('../../../assets/music/1.m4a'),
            title : '세번재곡',
            artist : '세번재아디스트',
            contentType : 'audio/m4a',
        });
    };


    return (
        <>
        <SearchPresenter
            navigation = {navigation}
            route = {route}

            keyword = {keyword}
            onSetKeyword = {onSetKeyword}
            onSearchButton = {onSearchButton}
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

export default SearchContainer;
