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
                if (route.params.playlistId === 1) {
                    setPlayListDetail({
                        playlistId : route.params.playlistId,
                        playlistName : '가요',
                        playlistTrackList : [
                            {
                                url : require('../../../assets/music/sokodomo.mp3'),
                                title : '회전목마 (Feat. Zion.T, 원슈타인) (Prod. Slom) (쇼미더머니 10 Episode 2)',
                                artist : 'sokodomo (소코도모)',
                                albumCover : 'https://images.genius.com/a31d79c5da743e13480e5e9de693d5ce.1000x1000x1.jpg',
                                contentType : 'audio/m4a',
                                index : 0,
                                pitchAlgorithm : PitchAlgorithm.Music,
                            },
                            {
                                url : require('../../../assets/music/beo.mp3'),
                                title : 'Counting Stars (Feat. Beenzino 빈지노)',
                                artist : "BE'O (비오)",
                                albumCover : 'https://blog.kakaocdn.net/dn/b89LZa/btrnC3HBsaQ/IyY2khsFwNT0xVsBbplKKk/img.jpg',
                                contentType : 'audio/m4a',
                                index : 0,
                                pitchAlgorithm : PitchAlgorithm.Music,
                            },
                            {
                                url : require('../../../assets/music/muddthestudent.mp3'),
                                title : '불협화음 (Feat. AKMU) (Prod. GRAY) (쇼미더머니 10 Semi Final)',
                                artist : 'Mudd the student (머드 더 스튜던트)',
                                albumCover : 'https://image.bugsm.co.kr/album/images/1000/204353/20435301.jpg',
                                contentType : 'audio/m4a',
                                index : 0,
                                pitchAlgorithm : PitchAlgorithm.Music,
                            },
                            {
                                url : require('../../../assets/music/basick.mp3'),
                                title : '만남은 쉽고 이별은 어려워 (Feat. Leellamarz) (Prod. TOIL) (쇼미더머니 10 Episode 3)',
                                artist : 'Basick (베이식)',
                                albumCover : 'https://image.bugsm.co.kr/album/images/1000/204336/20433609.jpg',
                                contentType : 'audio/m4a',
                                index : 0,
                                pitchAlgorithm : PitchAlgorithm.Music,
                            },
                            {
                                url : require('../../../assets/music/ive.mp3'),
                                title : 'ELEVEN',
                                artist : 'IVE (아이브)',
                                albumCover : 'https://image.bugsm.co.kr/album/images/1000/40683/4068361.jpg',
                                contentType : 'audio/m4a',
                                index : 0,
                                pitchAlgorithm : PitchAlgorithm.Music,
                            },
                        ],
                        createDate : '2021-12-11',
                        playlistCover : 'https://images.genius.com/a31d79c5da743e13480e5e9de693d5ce.1000x1000x1.jpg',
                    });
                } else if (route.params.playlistId === 2) {
                    setPlayListDetail({
                        playlistId : route.params.playlistId,
                        playlistName : '팝',
                        playlistTrackList : [
                            {
                                url : require('../../../assets/music/billie.mp3'),
                                title : 'you should see me in a crown',
                                artist : 'Billie Eilish(빌리 아일리시)',
                                albumCover : 'https://image.bugsm.co.kr/album/images/1000/8673/867317.jpg',
                                contentType : 'audio/m4a',
                                index : 0,
                                pitchAlgorithm : PitchAlgorithm.Music,
                            },
                            {
                                url : require('../../../assets/music/taylor.mp3'),
                                title : 'Look What You Made Me Do',
                                artist : 'Taylor Swift(테일러 스위프트)',
                                albumCover : 'https://image.bugsm.co.kr/album/images/1000/6659/665912.jpg',
                                contentType : 'audio/m4a',
                                index : 0,
                                pitchAlgorithm : PitchAlgorithm.Music,
                            },
                            {
                                url : require('../../../assets/music/weekend.mp3'),
                                title : 'Earned It (Fifty Shades Of Grey) (From The "Fifty Shades Of Grey" Soundtrack)',
                                artist : 'The Weeknd(위켄드)',
                                albumCover : 'https://image.bugsm.co.kr/album/images/1000/4734/473495.jpg',
                                contentType : 'audio/m4a',
                                index : 0,
                                pitchAlgorithm : PitchAlgorithm.Music,
                            },
                            {
                                url : require('../../../assets/music/kaori.mp3'),
                                title : 'STAY',
                                artist : 'The Kid LAROI , Justin Bieber(저스틴 비버)',
                                albumCover : 'https://image.bugsm.co.kr/album/images/1000/158177/15817728.jpg',
                                contentType : 'audio/m4a',
                                index : 0,
                                pitchAlgorithm : PitchAlgorithm.Music,
                            },
                            {
                                url : require('../../../assets/music/charlotte.mp3'),
                                title : "Joke's On You",
                                artist : 'Charlotte Lawrence(샬롯 로렌스)',
                                albumCover : 'https://image.bugsm.co.kr/album/images/1000/9625/962503.jpg',
                                contentType : 'audio/m4a',
                                index : 0,
                                pitchAlgorithm : PitchAlgorithm.Music,
                            },
                            {
                                url : require('../../../assets/music/ariana.mp3'),
                                title : 'Santa Tell Me',
                                artist : 'Ariana Grande(아리아나 그란데)',
                                albumCover : 'https://image.bugsm.co.kr/album/images/1000/4656/465672.jpg',
                                contentType : 'audio/m4a',
                                index : 0,
                                pitchAlgorithm : PitchAlgorithm.Music,
                            },
                            {
                                url : require('../../../assets/music/sia.mp3'),
                                title : 'Snowman',
                                artist : 'Sia(시아)',
                                albumCover : 'https://image.bugsm.co.kr/album/images/1000/6803/680332.jpg',
                                contentType : 'audio/m4a',
                                index : 0,
                                pitchAlgorithm : PitchAlgorithm.Music,
                            },

                        ],
                        createDate : '2021-12-17',
                        playlistCover : 'https://image.bugsm.co.kr/album/images/1000/8673/867317.jpg',
                    });
                }
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
