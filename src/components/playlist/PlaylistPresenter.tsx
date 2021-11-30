import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import {
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

import styles from './PlaylistStyled';



interface PlaylistProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const PlaylistPresenter = ({ navigation, route, ...props } : PlaylistProps) => {
    return (
        <SafeAreaView style = {styles.container}>
            <ScrollView>
                <Text>내 보관함 컨테이너</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PlaylistPresenter;
