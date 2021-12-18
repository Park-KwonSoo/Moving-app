import React, { Dispatch, SetStateAction, useRef } from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../config/interface';

import {
    StatusBar,
    Text,
    Image,
    View,
    TouchableOpacity,
    Animated,
} from 'react-native';
import {
    GestureDetector,
    PanGesture,
} from 'react-native-gesture-handler';

import styles from './GuideStyled';


interface GuideProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<RootStackParamList, 'GuideNavigator'>;

    page : number;
    setPage : Dispatch<SetStateAction<number>>;

    onSkipThisGuide : () => void;
    slideToPageChange : PanGesture;
}
const GuidePresenter = ({ navigation, route, ...props }: GuideProps) => {
    return (
        <>
        <StatusBar barStyle={'dark-content'} backgroundColor = {'#fff'}/>
        <View style = {styles.container}>
            <GestureDetector gesture = {props.slideToPageChange}>
            <View style = {styles.bodyWrapper}>
                <View style = {styles.pageWrapper}>
                {
                    props.page === 1 ?
                    <Image style = {styles.assetImage} source = {require('../../../assets/guide_page1.png')}/> :

                    props.page === 2 ?
                    <Image style = {styles.assetImage} source = {require('../../../assets/guide_page2.png')}/> :

                    props.page === 3 ?
                    <Image style = {styles.assetImage} source = {require('../../../assets/guide_page3.png')}/> :

                    props.page === 4 ?
                    <Image style = {styles.assetImage} source = {require('../../../assets/guide_page4.png')}/> :

                    props.page === 5 ?
                    <Image style = {styles.assetImage} source = {require('../../../assets/guide_page5.png')}/>
                    :
                    <Image style = {styles.assetImage} source = {require('../../../assets/guide_page6.png')}/>
                }
                </View>
            </View>
            </GestureDetector>

            <View style = {styles.footerWrapper}>
                <View style = {styles.footerNowLocationWrapper}>
                    <View style = {props.page === 1 ? styles.footerNowLocationDot : styles.footerNotNowLocationDot}/>
                    <View style = {props.page === 2 ? styles.footerNowLocationDot : styles.footerNotNowLocationDot}/>
                    <View style = {props.page === 3 ? styles.footerNowLocationDot : styles.footerNotNowLocationDot}/>
                    <View style = {props.page === 4 ? styles.footerNowLocationDot : styles.footerNotNowLocationDot}/>
                    <View style = {props.page === 5 ? styles.footerNowLocationDot : styles.footerNotNowLocationDot}/>
                    <View style = {props.page === 6 ? styles.footerNowLocationDot : styles.footerNotNowLocationDot}/>
                </View>
                <View style = {styles.footerTouchableWrapper}>
                {
                    props.page < 6 ?
                    <>
                    <TouchableOpacity
                        style = {styles.footerTouchableButton}
                        onPress = {props.onSkipThisGuide}
                    >
                        <Text style = {styles.footerTouchableText}>건너뛰기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.footerTouchableButton}
                        onPress = {() => props.setPage(props.page + 1)}
                    >
                        <Text style = {styles.footerTouchableText}>다음</Text>
                    </TouchableOpacity>
                    </> :
                    <>
                    <View style = {styles.footerTouchableButton} />
                    <TouchableOpacity
                        style = {styles.footerTouchableButton}
                        onPress = {props.onSkipThisGuide}
                    >
                        <Text style = {styles.footerTouchableText}>시작하기</Text>
                    </TouchableOpacity>
                    </>
                }
                </View>
            </View>
        </View>
        </>
    );
};

export default GuidePresenter;
