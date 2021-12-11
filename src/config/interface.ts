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
}

export declare type PlayListDetail = {
    playlistId : number;
    playlistName : string;
    playlistTrackList : Track[];
    createDate : string;
};
