import { Dispatch, SetStateAction } from 'react';

import {
    Track,
    State,
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
}

//moving 어플리케이션의 기본 프랍 형태
export interface MovingDefaultProps {

    nowTrackInfo : Track | undefined;
    setNowTrackInfo : Dispatch<SetStateAction<Track | undefined>>;

    nowTrackQueue : Track[];
    setNowTrackQueue : Dispatch<SetStateAction<Track[]>>;

    playingState : State;
    setPlayingState : Dispatch<SetStateAction<State>>;
}

//플레이리스트 인터페이스
export declare type Playlist = {
    playlistName : string;
    playlistId : number;
}
