import React, { useEffect, useState } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';

import * as MusicUtil from '../../util/TrackPlayerUtil';

import MainPresenter from './MainPresenter';
import Header from '../base/header';
import PlayingPopupContainer from '../base/playingPopup';


interface MainProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const MainContainer = ({ navigation, route, ...props } : MainProps ) => {

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
            header = "메인화면"
        />
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
