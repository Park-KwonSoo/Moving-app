import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import {
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

import styles from './SearchStyled';



interface SearchProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const SearchPresenter = ({ navigation, route, ...props } : SearchProps) => {
    return (
        <SafeAreaView style = {styles.container}>
            <ScrollView>
                <Text>검색 컨테이너</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SearchPresenter;
