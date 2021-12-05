import React, { useEffect } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';

import PlaylistPresenter from './PlaylistPresenter';
import PlayingPopupContainer from '../base/playingPopup';


interface PlaylistProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const PlaylistContainer = ({ navigation, route, ...props } : PlaylistProps ) => {

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = () => {
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
        />
        </>
    );
};

export default PlaylistContainer;
