import React from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import { RootStackParamList, PlayListDetail } from '../../config/interface';

import styles from './PlayListDetailStyled';


interface PlayListDetailProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<RootStackParamList, 'PlayListDetailScreen'>;

    playListDetail : PlayListDetail | undefined;
}
const PlayListDetailPresenter = ({ navigation, route, ...props} : PlayListDetailProps) => {
    return (
        props.playListDetail ?
        <SafeAreaView style = {styles.container}>
        <View style = {styles.wrapper}>
            <View style = {styles.playListHeader}>
                <View style = {styles.playListImageWrapper}>
                    <Image style = {styles.playListImage} source = {require('../../../assets/search-focused.png')}/>
                </View>
                <View style = {styles.playListInfoWrapper}>
                    <Text style = {styles.playListCreatedDateInfo}>최근 수정일</Text>
                    <Text style = {styles.playListCreatedDate}>{props.playListDetail.createDate}</Text>
                </View>
            </View>
            <FlatList
                style = {styles.playListBody}
                data = {props.playListDetail.playlistTrackList}
                renderItem = {({ item }) => {
                    return (
                        <TouchableOpacity
                            style = {styles.eachTrackWrapper}
                            onLongPress= {() => console.log('press')}
                        >
                            <View style = {styles.eachTrackImageWrapper}>
                                <Image style = {styles.eachTrackImage} source = {require('../../../assets/pause.png')}/>
                            </View>
                            <View style = {styles.eachTrackInfoWrapper}>
                                <Text style = {styles.eachTrackInfoTitle}>{item.title}</Text>
                                <Text style = {styles.eachTrackInfoArtist}>{item.artist}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
                ItemSeparatorComponent = {() => <View style = {styles.eachTrackSeperator}/>}
            />
        </View>
        </SafeAreaView>

        :
        <SafeAreaView style = {styles.container}>
        <View style = {{...styles.wrapper, display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
            <Text style = {{fontFamily : 'Jua-Regular', fontSize : 20}}>에러가 발생했습니다.</Text>
        </View>
        </SafeAreaView>
    );
};

export default PlayListDetailPresenter;
