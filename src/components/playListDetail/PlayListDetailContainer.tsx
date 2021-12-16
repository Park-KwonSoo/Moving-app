import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { useFocusEffect, NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList, PlayListDetail, PlayingModeModal, TouchFocusLocation } from '../../config/interface';


import {
    Gesture,
    PanGesture,
    GestureStateChangeEvent,
    GestureUpdateEvent,
    PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

import {
    Track,
    PitchAlgorithm,
} from 'react-native-track-player';

import Header from '../base/header';
import PlayingPopupContainer from '../base/playingPopup';
import PlayListDetailPresenter from './PlayListDetailPresenter';



interface PlayListDetailProps {
    navigation : NavigationProp<{}>;
    route : RouteProp<RootStackParamList, 'PlayListDetailScreen'>;
}
const PlayListDetailContainer = ({ navigation, route, ...props } : PlayListDetailProps) => {

    //휴대폰의 사이즈
    const { height, width } = Dimensions.get('window');

    //플레이리스트 상세 조회 정보
    const [playListDetail, setPlayListDetail] = useState<PlayListDetail | undefined>();

    //상세 정보 내에서 특정 트랙에서 슬라이드를 했을 때, 받아오는 트랙의 정보
    const [selectTrack, setSelectTrack] = useState<Track | undefined>();

    //재생 모드를 설정할 수 있는 modal : on이 되면 모달이 켜지게 됨
    const [modal, setModal] = useState<PlayingModeModal>({
        modalOn : false,
        modalLocation : {
            x : 0,
            y : 0,
        },
    });

    //modal이 켜진 상태에서 손가락을 떼지 않고 움직인다면, 어떤 버튼인지 알게 하기 위한 터치 좌표값.
    const [touchFocusLocation, setTouchFocusLocation] = useState<TouchFocusLocation>({
        x : 0,
        y : 0,
    });
    //모달의 기능을 수행하기 위해서, y좌표를 받아와서 해당 y좌표에 존재하는 버튼을 실행하기 위한 y값.
    const [relaseButtonLocationY, setReleaseButtonLocationY] = useState<number>(0);


    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async() => {
                //playListId의 값을 이용해 playListDetail을 설정한다.
                setPlayListDetail({
                    playlistId : route.params.playlistId,
                    playlistName : '가요',
                    playlistTrackList : [
                        {
                            url : require('../../../assets/music/1.m4a'),
                            title : '임시용',
                            artist : '박권수',
                            contentType : 'audio/m4a',
                            index : 0,
                            pitchAlgorithm : PitchAlgorithm.Music,
                        },
                        {
                            url : require('../../../assets/music/1.m4a'),
                            title : '두번째곡입니당당',
                            artist : '박권수입니다람쥐',
                            contentType : 'audio/m4a',
                            index : 1,
                            pitchAlgorithm : PitchAlgorithm.Music,
                        },
                        {
                            url : require('../../../assets/music/1.m4a'),
                            title : '세번재',
                            artist : '333',
                            contentType : 'audio/m4a',
                            index : 1,
                            pitchAlgorithm : PitchAlgorithm.Music,
                        },
                        {
                            url : require('../../../assets/music/1.m4a'),
                            title : '네번째곡곡',
                            artist : '412444',
                            contentType : 'audio/m4a',
                            index : 1,
                            pitchAlgorithm : PitchAlgorithm.Music,
                        },
                        {
                            url : require('../../../assets/music/1.m4a'),
                            title : '다ㅣ섯번째곡',
                            artist : 'redbean096',
                            contentType : 'audio/m4a',
                            index : 1,
                            pitchAlgorithm : PitchAlgorithm.Music,
                        },
                    ],
                    createDate : '2021-12-11',
                });
            };
            fetchData();
        }, [route])
    );

    //트랙에서 모달을 오른쪽 혹은 왼쪽으로 슬라이드 했을 때 나타나는 메뉴이다.
    const slideToModalOn = (track : Track) : PanGesture => {

        return Gesture.Pan()
        .activeOffsetX([-10, 10])
        .failOffsetY(20)
        .onStart((e : GestureStateChangeEvent<PanGestureHandlerEventPayload>) => {
            if (e.translationX >= 5 || e.translationX <= -5) {
                setModal({
                    modalOn : true,
                    modalDirection : e.translationX > 0 ? 'right' : 'left',
                    modalLocation : {
                        x : e.absoluteX + e.translationX,
                        y : e.absoluteY,
                    },
                });
                setSelectTrack(track);
            }

        })
        .onUpdate((e : GestureUpdateEvent<PanGestureHandlerEventPayload>) => {
            setTouchFocusLocation({
                x : e.absoluteX,
                y : e.absoluteY,
            });
        })
        .onEnd((e : GestureStateChangeEvent<PanGestureHandlerEventPayload>) => {
            //해당 버튼에서 손가락을 떼게 되면, 좌표 값을 전달한다.
            setReleaseButtonLocationY(e.absoluteY);
            setModal({
                modalOn : false,
                modalLocation : {
                    x : 0,
                    y : 0,
                },
            });
        });

    };


    return (
        <>
        <Header
            navigation = {navigation}
            route = {route}
            header = {playListDetail ? playListDetail.playlistName : ''}
        />
        <PlayListDetailPresenter
            navigation = {navigation}
            route = {route}

            height = {height}
            width = {width}

            playListDetail = {playListDetail}
            selectTrack = {selectTrack}

            slideToModalOn = {slideToModalOn}

            modal = {modal}
            touchFocusLocation = {touchFocusLocation}
            relaseButtonLocationY = {relaseButtonLocationY}
            setReleaseButtonLocationY = {setReleaseButtonLocationY}
        />
        <PlayingPopupContainer
            navigation = {navigation}
            route = {route}
        />
        </>
    );
};

export default PlayListDetailContainer;
