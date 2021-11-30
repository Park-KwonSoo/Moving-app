import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import {
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

import styles from './MainStyled';



interface MainProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;
}

const MainPresenter = ({ navigation, route, ...props } : MainProps) => {
    return (
        <SafeAreaView style = {styles.container}>
            <ScrollView>
                <Text>메인 컨테이너</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MainPresenter;
