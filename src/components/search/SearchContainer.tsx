import React, { useEffect, useState } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';

import {
    Track,
} from 'react-native-track-player';

import SearchPresenter from './SearchPresenter';
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
            const fetchData = () => {
            };
            fetchData();
        }, [])
    );


    //keyword를 설정
    const onSetKeyword = (e : string) => {
        setKeyword(e);
    };

    //검색 버튼 클릭시 발생 이벤트 => 서버로부터 결과를 가져온다.
    const onSearchButton = async () => {
        console.log(keyword);
        console.log(searchResult);
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
        />
        </>
    );
};

export default SearchContainer;
