import React, { useEffect } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';

import PlayingNowListPresenter from './PlayingNowListPresenter';

import useAsyncStorage from '../../../util/useAsyncStorage';


interface PlayingNowListProp {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}
const PlayingNowListContainer = ({ navigation, route } : PlayingNowListProp) => {
    return (
        <PlayingNowListPresenter
            navigation = {navigation}
            route = {route}
        />
    );
};

export default PlayingNowListContainer;
