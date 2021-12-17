import React, { Dispatch, SetStateAction } from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';

import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
} from 'react-native';

import {
    GestureDetector,
    PanGesture,
} from 'react-native-gesture-handler';

import {
    Track,
} from 'react-native-track-player';

import { RootStackParamList, PlayListDetail, PlayingModeModal, TouchFocusLocation } from '../../config/interface';

import PlayingModeModalContainer from '../base/playingModeModal';
import styles from './PlayListDetailStyled';


interface PlayListDetailProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<RootStackParamList, 'PlayListDetailScreen'>;

    height : number;
    width : number;

    playListDetail : PlayListDetail | undefined;
    selectTrack : Track | undefined;

    slideToModalOn : (track : Track) => PanGesture;

    modal : PlayingModeModal;
    touchFocusLocation : TouchFocusLocation;
    relaseButtonLocationY : number;
    setReleaseButtonLocationY : Dispatch<SetStateAction<number>>;
}
const PlayListDetailPresenter = ({ navigation, route, ...props} : PlayListDetailProps) => {
    return (
        props.playListDetail ?
        <>
        {
            props.modal.modalOn ?
            <PlayingModeModalContainer
                height = {props.height}
                width = {props.width}

                modal = {props.modal}
                touchFocusLocation = {props.touchFocusLocation}

                playListDetail = {props.playListDetail}
                selectTrack = {props.selectTrack}

                relaseButtonLocationY = {props.relaseButtonLocationY}
                setReleaseButtonLocationY = {props.setReleaseButtonLocationY}
            />
            : null
        }
        <SafeAreaView style = {styles.container}>
        <View style = {styles.wrapper}>
            <View style = {styles.playListHeader}>
                <View style = {styles.playListImageWrapper}>
                    <Image style = {styles.playListImage} source = {props.playListDetail.playlistCover ? { url : props.playListDetail.playlistCover } : require('../../../assets/unknown.png')}/>
                </View>
                <View style = {styles.playListInfoWrapper}>
                    <View style = {styles.playListCreatedDateWrapper}>
                        <Text style = {styles.playListCreatedDateInfo}>최근 수정일</Text>
                        <Text style = {styles.playListCreatedDate}>{props.playListDetail.createDate}</Text>
                    </View>
                    <View style = {styles.playListOtherInfoWrapper}>
                        <Text style = {styles.playListNumOfTrackInfo}>총 </Text>
                        <Text style = {styles.playListNumOfTrack}>{props.playListDetail.playlistTrackList.length + '곡'}</Text>
                    </View>
                </View>
            </View>
            <FlatList
                style = {styles.playListBody}
                data = {props.playListDetail.playlistTrackList}
                scrollEnabled = {!props.modal.modalOn}
                renderItem = {({ item }) => {
                    return (
                        <GestureDetector gesture = {props.slideToModalOn(item)}>
                        <View style = {styles.eachTrackWrapper}>
                            <View style = {styles.eachTrackImageWrapper}>
                                <Image style = {styles.eachTrackImage} source = {item.albumCover ? {url : item.albumCover} : require('../../../assets/unknown.png')}/>
                            </View>
                            <View style = {styles.eachTrackInfoWrapper}>
                                <Text style = {styles.eachTrackInfoTitle}>{item.title && item.title.length > 22 ? `${item.title.slice(0, 22)}...` : item.title}</Text>
                                <Text style = {styles.eachTrackInfoArtist}>{item.artist && item.artist.length > 22 ? `${item.artist.slice(0, 22)}...` : item.artist}</Text>
                            </View>

                        </View>
                        </GestureDetector>
                    );
                }}
                ItemSeparatorComponent = {() => <View style = {styles.eachTrackSeperator}/>}
            />
        </View>
        </SafeAreaView>
        </>
        :
        <SafeAreaView style = {styles.container}>
        <View style = {{...styles.wrapper, display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
            <Text style = {{fontFamily : 'Jua-Regular', fontSize : 20}}>에러가 발생했습니다.</Text>
        </View>
        </SafeAreaView>
    );
};

export default PlayListDetailPresenter;
