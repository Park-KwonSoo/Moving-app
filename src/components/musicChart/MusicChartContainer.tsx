import React, { useEffect } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';

import MusicChartPresenter from './MusicChartPresenter';


interface MusicChartProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const MusicChartContainer = ({ navigation, route, ...props } : MusicChartProps ) => {

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = () => {
            };
            fetchData();
        }, [])
    );

    return (
        <MusicChartPresenter
            navigation = {navigation}
            route = {route}
        />
    );
};

export default MusicChartContainer;
