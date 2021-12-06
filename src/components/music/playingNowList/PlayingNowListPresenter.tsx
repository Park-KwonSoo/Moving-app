import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Track } from 'react-native-track-player';

import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
} from 'react-native';

import {
    GestureDetector,
} from 'react-native-gesture-handler';

import styles from './PlayingNowListStyled';


interface PlayingNowListProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{
        params : {
            name : string
        }
    }, 'params'>;

    nowTrackInfo : Track | undefined;

    nowTrackQueue : Track[];
    onPlayThisMusic : (index : number) => void;
}
const PlayingNowListPresenter = ({ navigation, route, ...props }: PlayingNowListProps) => {
    return (
        <GestureDetector>
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
                    renderItem = {({ item }) => {
                        return (
                            <View style = {styles.eachListWrapper}>
                                <TouchableOpacity style = {styles.eachListAlbumWrapper}>
                                    <Image style = {styles.eachListAlbumImg} source = {require('../../../../assets/pause.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style = {styles.eachListMusicInfo}
                                    onPress = {() => props.onPlayThisMusic(item.index)}
                                >
                                    <Text style = {
                                        props.nowTrackInfo !== undefined  && props.nowTrackInfo.index === item.index ?
                                        styles.eachListTitleTextSelect : styles.eachListTitleTextUnselect
                                    }>{item.title}</Text>
                                    <Text style = {styles.eachListArtistText}>{item.artist}</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                    ItemSeparatorComponent = {() => <View style = {styles.seperator}/>}
                />
            </SafeAreaView>
        </GestureDetector>
    );
};

export default PlayingNowListPresenter;
