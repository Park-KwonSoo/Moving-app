import React, { useEffect, useState } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';

import * as MusicUtil from '../../util/TrackPlayerUtil';

import MusicChartPresenter from './MusicChartPresenter';
import Header from '../base/header';
import PlayingPopupContainer from '../base/playingPopup';


interface MusicChartProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const MusicChartContainer = ({ navigation, route, ...props } : MusicChartProps ) => {


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
            header = "차트"
        />
        <MusicChartPresenter
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

export default MusicChartContainer;
