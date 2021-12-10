import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Playlist } from '../../config/interface';

import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    FlatList,
    Image,
} from 'react-native';

import styles from './PlaylistStyled';



interface PlaylistProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<{}>;

    myPlaylist : Playlist[];
    onGoPlaylistDetail : (playListId : number) => void;
}

const PlaylistPresenter = ({ navigation, route, ...props } : PlaylistProps) => {
    return (
        <SafeAreaView style = {styles.container}>
        <View style = {styles.wrapper}>
            <Text style = {styles.PlaylistExplain}>플레이리스트</Text>
            <FlatList
                style = {styles.PlaylistContainer}
                data = {props.myPlaylist}
                renderItem = {({ item }) => {
                    return (
                        <TouchableOpacity
                            style = {styles.EachWrapper}
                            onPress = {() => props.onGoPlaylistDetail(item.playlistId)}
                        >
                            <View style = {styles.EachImageWrapper}>
                                <Image style = {styles.EachImage} source = {require('../../../assets/search-focused.png')} />
                            </View>
                            <View style = {styles.EachInfoWrapper}>
                                <Text style = {styles.EachTitle}>{item.playlistName}</Text>
                                <Text style = {styles.EachNumOfMusic}>{`총 수록곡 : ${item.playlistTrackCount}`}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
                ItemSeparatorComponent = {() => <View style = {styles.Seperator}/>}
            />
        </View>
        </SafeAreaView>
    );
};

export default PlaylistPresenter;
