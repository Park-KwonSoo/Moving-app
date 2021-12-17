import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList, MovingDefaultProps } from '../../../config/interface';
import { Track } from 'react-native-track-player';

import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    Animated,
} from 'react-native';

import { Swipeable } from 'react-native-gesture-handler';
import styles from './PlayingNowListStyled';


interface PlayingNowListProps extends MovingDefaultProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<RootStackParamList, 'MusicNavigator'>;

    onPlayThisMusic : (item : Track) => void;

    swipeToDelete : (index : number) => Promise<void>;
}
const PlayingNowListPresenter = ({ navigation, route, ...props }: PlayingNowListProps) => {

    //swipe한 후 삭제 버튼을 눌렀을 때, 닫기 버튼을 누르기 위한 변수 및 method
    const eachRef : any[] = [];
    const closeSwipeable = (index : number) : void => {
        eachRef[index].close();
    };

    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.topButtonWrapper}>
                <TouchableOpacity
                    style = {styles.topButton}
                >
                    <Text style = {styles.topButtonTxt}>선택</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.topButton}
                >
                    <Text style = {styles.topButtonTxt}>검색</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style = {styles.listWrapper}
                data = {props.nowTrackQueue}
                renderItem = {({ item, index }) => {
                    return (
                        <Swipeable
                            ref = {ref => eachRef[index] = ref}
                            renderRightActions = {
                                (progress : Animated.AnimatedInterpolation, dragX : Animated.AnimatedInterpolation) => {
                                    const opacity = dragX.interpolate({
                                        inputRange : [-80, 0],
                                        outputRange : [1, 0],
                                        extrapolate: 'clamp',
                                    });
                                    return (
                                        <Animated.View style = {[styles.swipeDeleteWrapper, { opacity }]}>
                                        <TouchableOpacity onPress = {() => {props.swipeToDelete(index); closeSwipeable(index);}}>
                                            <View style = {styles.swipeDeleteImageWrapper}>
                                                <Image source = {require('../../../../assets/delete.png')} style = {styles.swipeDeleteImage}/>
                                            </View>
                                        </TouchableOpacity>
                                        </Animated.View>
                                    );
                                }
                            }
                            rightThreshold = {41}
                        >
                        <View style = {styles.eachListWrapper}>
                            <TouchableOpacity style = {styles.eachListAlbumWrapper}>
                                <Image style = {styles.eachListAlbumImg} source = {item.albumCover ? {url : item.albumCover} : require('../../../../assets/unknown.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style = {styles.eachListMusicInfo}
                                onPress = {() => props.onPlayThisMusic(item)}
                            >
                                <Text style = {
                                    item.artist === props.nowTrackInfo?.artist
                                    && item.title === props.nowTrackInfo?.title
                                    && item.album === props.nowTrackInfo?.album
                                    && item.index === props.nowTrackInfo?.index
                                    ?
                                    styles.eachListTitleTextSelect : styles.eachListTitleTextUnselect
                                }>
                                    {item.title && item.title.length > 20 ? `${item.title.slice(0, 20)}...` : item.title}
                                </Text>
                                <Text style = {styles.eachListArtistText}>
                                    {item.artist && item.artist.length > 20 ? `${item.artist.slice(0, 20)}...` : item.artist}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        </Swipeable>
                    );
                }}
                ItemSeparatorComponent = {() => <View style = {styles.seperator}/>}
            />
        </SafeAreaView>
    );
};

export default PlayingNowListPresenter;
