import { Dispatch, SetStateAction } from 'react';

import {
    Track,
    State,
    RepeatMode,
} from 'react-native-track-player';


//screen의 routing interface
interface DefaultRoute {
    name : string;
    params : any;
}

//root stack paramlist
export type RootStackParamList = {
    GuideNavigator : DefaultRoute;
    TabNavigator : DefaultRoute;
    MusicNavigator : DefaultRoute;

    MainScreen : DefaultRoute;
    MusicChartScreen : DefaultRoute;
    SearchScreen : DefaultRoute;
    PlaylistScreen : DefaultRoute;
    PlayListDetailScreen : {
        playlistId : number;
    };
}

//moving 어플리케이션의 기본 프랍 형태
export interface MovingDefaultProps {

    nowTrackInfo? : Track | undefined;
    setNowTrackInfo? : Dispatch<SetStateAction<Track | undefined>>;

    nowTrackQueue? : Track[];
    setNowTrackQueue? : Dispatch<SetStateAction<Track[]>>;

    playingState? : State;

    loopMode? : RepeatMode;
    setLoopMode? : Dispatch<SetStateAction<RepeatMode>>;

    shuffleMode? : boolean;
    setShuffleMode? : Dispatch<SetStateAction<boolean>>;
}

//플레이리스트의 정보를 담고 있는 인터페이스
export declare type Playlist = {
    playlistId : number;
    playlistName : string;
    playlistTrackCount : number;
    playlistCover? : string;
}

//플레이리스트의 상세 정보 인터페이스
export declare type PlayListDetail = {
    playlistId : number;
    playlistName : string;
    playlistTrackList : Track[];
    playlistCover? : string;
    createDate : string;
};

//플레이 모드를 변경하기 위한 제스처 인터랙션 팝업창
export declare type PlayingModeModal = {
    modalOn : boolean;
    modalLocation : {
        x : number;
        y : number;
    };
    modalDirection? : string;

};

//제스처 인터랙션 팝업창의 각 버튼
export declare type PlayingModeModalButton = {
    buttonName : string;
    buttonFunc : (() => Promise<void | null | undefined>) | (() => void | null | undefined);
    buttonTextColor : string;
};

//제스처를 이용해서 움직일 때, 손가락의 위치
export declare type TouchFocusLocation = {
    x : number;
    y : number;
};

//제스처 인터랙션 창 크기 인터페이스
export declare type ModalSize = {
    height : number;
    width : number;
}

//제스처 인터랙션의 위치 인터페이스
export declare type ModalLocation = {
    x : number;
    y : number;
}
