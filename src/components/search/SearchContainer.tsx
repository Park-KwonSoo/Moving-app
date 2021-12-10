import React, { useEffect, useState } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';
import { MovingDefaultProps } from '../../config/interface';

import { addTrackToPlayingListToNext, addTrackToPlayingListToLast } from '../../util/TrackPlayerUtil';
import TrackPlayer, {
    Track,
    State,
    RepeatMode,
} from 'react-native-track-player';

import SearchPresenter from './SearchPresenter';
import Header from '../base/header';
import PlayingPopupContainer from '../base/playingPopup';


interface SearchProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const SearchContainer = ({ navigation, route, ...props } : SearchProps ) => {

    const [keyword, setKeyword] = useState<string | undefined>('');
    const [searchResult, setSearchResult] = useState<Track[]>([]);

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () : Promise<void> => {
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
        <Header
            navigation = {navigation}
            route = {route}
            header = "검색"
        />
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
        />
        </>
    );
};

export default SearchContainer;
