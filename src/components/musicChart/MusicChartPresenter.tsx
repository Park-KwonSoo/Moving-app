import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import {
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

import styles from './MusicChartStyled';



interface MusicChartProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const MusicChartPresenter = ({ navigation, route, ...props } : MusicChartProps) => {
    return (
        <SafeAreaView style = {styles.container}>
            <ScrollView>
                <Text>차트 컨테이너</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MusicChartPresenter;
