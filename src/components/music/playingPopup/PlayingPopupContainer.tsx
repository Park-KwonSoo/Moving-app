import React, { useEffect } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';

import PlaylistPresenter from '../../playlist/PlaylistPresenter';

import useAsyncStorage from '../../../util/useAsyncStorage';


interface PlayingPopupProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}
const PlayingPopupContainer = ({ navigation, route } : PlayingPopupProps) => {
    return (
        <PlaylistPresenter
            navigation = {navigation}
            route = {route}
        />
    );
};

export default PlayingPopupContainer;
