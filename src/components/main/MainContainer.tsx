import React, { useEffect } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';

import MainPresenter from './MainPresenter';


interface MainProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const MainContainer = ({ navigation, route, ...props } : MainProps ) => {

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = () => {
            };
            fetchData();
        }, [])
    );

    return (
        <MainPresenter
            navigation = {navigation}
            route = {route}
        />
    );
};

export default MainContainer;
