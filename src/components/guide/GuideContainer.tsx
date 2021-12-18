import React, { useState } from 'react';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../config/interface';

import {
    Gesture, GestureStateChangeEvent, PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

import GuidePresenter from './GuidePresenter';


interface GuideProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<RootStackParamList, 'GuideNavigator'>;
}
const GuideContainer = ({ navigation, route, ...props } : GuideProps) => {

    const [page, setPage] = useState<number>(1);


    useFocusEffect(
        React.useCallback(() => {
            const fetchData = () => {
                setPage(1);
            };
            fetchData();
        }, [])
    );

    const onSkipThisGuide = () : void => {
        navigation.navigate('TabNavigator' as never, {} as never);
    };

    const slideToPageChange = Gesture.Pan()
        .activeOffsetX([-30, 30])
        .onFinalize((e : GestureStateChangeEvent<PanGestureHandlerEventPayload>) => {
            //왼쪽으로 슬라이드(이전페이지로 이동)
            if (e.translationX > 50) {
                if (page > 1) {
                    setPage(page - 1);
                }
            }
            //오른쪽으로 슬라이드(다음페이지로 이동)
            else if (e.translationX < -50) {
                if (page < 6) {
                    setPage(page + 1);
                }
            }
        });


    return (
        <GuidePresenter
            navigation = {navigation}
            route = {route}

            page = {page}
            setPage = {setPage}

            onSkipThisGuide = {onSkipThisGuide}
            slideToPageChange = {slideToPageChange}
        />
    );
};

export default GuideContainer;
