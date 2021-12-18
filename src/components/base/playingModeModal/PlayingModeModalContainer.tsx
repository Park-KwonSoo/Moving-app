import React, { useState, Dispatch, SetStateAction } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import {
    PlayListDetail,
    PlayingModeModal,
    PlayingModeModalButton,
    TouchFocusLocation,
    ModalSize,
    ModalLocation,
 } from '../../../config/interface';

import * as MusicUtil from '../../../util/TrackPlayerUtil';
import TrackPlayer, {
    Track,
} from 'react-native-track-player';

import PlayingModeModalPresenter from './PlayingModeModalPresenter';



interface PlayingModeModalProps {
    width : number,
    height : number;

    modal : PlayingModeModal;
    touchFocusLocation : TouchFocusLocation;

    playListDetail : PlayListDetail | undefined;
    selectTrack : Track | undefined;

    relaseButtonLocationY : number;
    setReleaseButtonLocationY : Dispatch<SetStateAction<number>>;
}
const PlayingModeModalContainer = (props : PlayingModeModalProps) => {

    //한 곡만 재생
    const onPlayOnlyOneTrack = async () : Promise<void> => {
        if (props.selectTrack !== undefined) {
            await MusicUtil.changePlayListByOneTrack(props.selectTrack);
        }
    };

    //한 곡 마지막으로 추가하고 재생
    const onAddOneTrackAndPlay = async () : Promise<void> => {
        if (props.selectTrack !== undefined) {
            await MusicUtil.addTrackToPlayingListToLast(props.selectTrack);
            const queue = await TrackPlayer.getQueue();
            await TrackPlayer.skip(queue.length - 1);
            await TrackPlayer.play();
        }
    };

    //한 곡 다음에 추가
    const onAddOneTrackNext = async () : Promise<void> => {
        if (props.selectTrack !== undefined) {
            await MusicUtil.addTrackToPlayingListToNext(props.selectTrack);
        }
    };

    //한 곡 마지막에 추가
    const onAddOneTrackLast = async() : Promise<void> => {
        if (props.selectTrack !== undefined) {
            await MusicUtil.addTrackToPlayingListToLast(props.selectTrack);
        }
    };

    //현재 플레이리스트로 전체 변경
    const onChangePlayList = async() : Promise<void> => {
        if (props.playListDetail !== undefined && props.selectTrack !== undefined) {
            const currentTrackIndex : number | undefined = props.playListDetail?.playlistTrackList.findIndex((track : Track) => {
                return track === props.selectTrack;
            });
            await MusicUtil.changePlayListByPlayList(props.playListDetail.playlistTrackList, currentTrackIndex);
        }
    };

    //현재 플레이리스트 마지막에 추가
    const onAddAllPlayListLast = async() : Promise<void> => {
        if (props.playListDetail !== undefined) {
            await MusicUtil.addTrackListToPlayingList(props.playListDetail.playlistTrackList);
        }
    };

    //현재 플레이리스트 다음에 추가
    const onAddAllPlayListNext = async() : Promise<void> => {
        if (props.playListDetail !== undefined) {
            const currentTrackIndex = await TrackPlayer.getCurrentTrack();
            await MusicUtil.addTrackListToPlayingList(props.playListDetail.playlistTrackList, currentTrackIndex + 1);
        }
    };

    //기존 보관함, 혹은 새로운 보관함을 만들고 해당 보관함에 선택된 곡 추가
    const onAddOneTrackMyPlayList = async() : Promise<void> => {
        Alert.alert('잠시만요!', '해당 기능을 준비중입니다.', [
            {
                text : '확인',
                onPress : () => null,
            },
        ]);
    };


    //왼쪽으로 슬라이드 했을 떄 나타나는 버튼 목록들
    const leftButtonSet : PlayingModeModalButton[] = [
        {
            buttonName : '재생목록 전체 변경',
            buttonFunc : onChangePlayList,
            buttonTextColor : '#000',
        },
        {
            buttonName : '재생목록에 전체 추가',
            buttonFunc : onAddAllPlayListLast,
            buttonTextColor : '#000',
        },
        {
            buttonName : '다음 곡으로 전체 추가',
            buttonFunc : onAddAllPlayListNext,
            buttonTextColor : '#000',
        },
        {
            buttonName : '내 보관함에 한 곡 추가',
            buttonFunc : onAddOneTrackMyPlayList,
            buttonTextColor : '#000',
        },
        {
            buttonName : '취소',
            buttonFunc : () => {
                console.log('취소');
            },
            buttonTextColor : '#FF5733',
        },
    ];
    //오른쪽으로 슬라이드 했을 때 나타나는 버튼 목록들
    const rightButtonSet : PlayingModeModalButton[] = [
        {
            buttonName : '한 곡만 재생',
            buttonFunc : onPlayOnlyOneTrack,
            buttonTextColor : '#000',
        },
        {
            buttonName : '한 곡 추가 후 재생',
            buttonFunc : onAddOneTrackAndPlay,
            buttonTextColor : '#000',
        },
        {
            buttonName : '한 곡 다음에 재생',
            buttonFunc : onAddOneTrackNext,
            buttonTextColor : '#000',
        },
        {
            buttonName : '한 곡 마지막에 재생',
            buttonFunc : onAddOneTrackLast,
            buttonTextColor : '#000',
        },
        {
            buttonName : '취소',
            buttonFunc : () => {
                console.log('오른쪽 버튼 취소');
            },
            buttonTextColor : '#FF5733',
        },
    ];

    const modalSize : ModalSize = {
        height : props.height / 4,
        width : props.width / 2.5,
    };
    const [modalLocation, setModalLocation] = useState<ModalLocation>({
        x : 0,
        y : 0,
    });


    useFocusEffect(
        React.useCallback(() => {
            //모달 팝업이 켜졌을 때 실행함 : 위치 지정
            const fetchData = async() => {
                setModalLocation({
                    x : props.modal.modalDirection === 'left' ?
                        props.modal.modalLocation.x - 200
                        : props.modal.modalLocation.x,

                    y : props.modal.modalLocation.y + modalSize.height > props.height * 9 / 10 ?
                        props.modal.modalLocation.y - modalSize.height
                        : props.modal.modalLocation.y ,
                });
            };

            fetchData();


            //모달 팝업이 끝나면 실행함 : 해당 위치의 함수를 실행한다.
            const onButtonFunc = () : void => {
                if (props.relaseButtonLocationY > 0) {
                    if (props.modal.modalDirection === 'left') {
                        const modalButtonHeight : number = modalSize.height / leftButtonSet.length;

                        for (let index = 0; index < leftButtonSet.length; index++) {
                            if (modalButtonHeight * index + modalLocation.y <= props.relaseButtonLocationY
                                && modalButtonHeight * (index + 1) + modalLocation.y > props.relaseButtonLocationY
                            ) {
                                leftButtonSet[index].buttonFunc();
                                break;
                            }
                        }
                    } else if (props.modal.modalDirection === 'right') {
                        const modalButtonHeight : number = modalSize.height / rightButtonSet.length;

                        for (let index = 0; index < rightButtonSet.length; index++) {
                            if (modalButtonHeight * index + modalLocation.y <= props.relaseButtonLocationY
                                && modalButtonHeight * (index + 1) + modalLocation.y > props.relaseButtonLocationY
                            ) {
                                rightButtonSet[index].buttonFunc();
                                break;
                            }
                        }
                    }
                }
                props.setReleaseButtonLocationY(0);
            };

            return () => {
                onButtonFunc();
            };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props.modal, props.height, modalSize.height, props.relaseButtonLocationY])
    );

    const isSelectedButton = (index : number, modalButtonHeight : number) : boolean => {
        return  (
            modalButtonHeight * index + modalLocation.y <= props.touchFocusLocation.y
            && modalButtonHeight * (index + 1) + modalLocation.y > props.touchFocusLocation.y
        );
    };



    return (
        <PlayingModeModalPresenter
            height = {props.height}
            width = {props.width}

            modal = {props.modal}
            modalSize = {modalSize}
            modalLocation = {modalLocation}

            touchFocusLocation = {props.touchFocusLocation}

            leftButtonSet = {leftButtonSet}
            rightButtonSet = {rightButtonSet}

            isSelectedButton = {isSelectedButton}
        />
    );
};

export default PlayingModeModalContainer;
