import React, { useState, useEffect } from 'react';
import { useFocusEffect, NavigationProp, RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList, PlayListDetail } from '../../config/interface';

import * as MusicUtil from '../../util/TrackPlayerUtil';
import {
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

    const [playListDetail, setPlayListDetail] = useState<PlayListDetail | undefined>();

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async() => {
                //playListId의 값을 이용해 playListDetail을 설정한다.
                setPlayListDetail({
                    playlistId : route.params ? route.params.playlistId : 0,
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

    useEffect(() => {

    }, []);

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

            playListDetail = {playListDetail}
        />
        <PlayingPopupContainer
            navigation = {navigation}
            route = {route}
        />
        </>
    );
};

export default PlayListDetailContainer;
