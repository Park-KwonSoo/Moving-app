import React, { useEffect } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';

import SearchPresenter from './SearchPresenter';


interface SearchProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const SearchContainer = ({ navigation, route, ...props } : SearchProps ) => {

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = () => {
            };
            fetchData();
        }, [])
    );

    return (
        <SearchPresenter
            navigation = {navigation}
            route = {route}
        />
    );
};

export default SearchContainer;
