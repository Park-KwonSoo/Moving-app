import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TrackPlayer, {
  Event as TrackPlayerEvent,
  RepeatMode,
  Track,
  State,
} from 'react-native-track-player';

import AppStack from './src/navigation/AppStack';

const App = () => {

  const [nowTrackInfo, setNowTrackInfo] = useState<Track>();
  const [nowTrackQueue, setNowTrackQueue] = useState<Track[]>([]);
  const [playingState, setPlayingState] = useState<State>(State.Paused);

  const initializeTrackPlayerSet = async () => {
    //큐가 끝나면 발생하는 이벤트를 등록
    TrackPlayer.addEventListener(TrackPlayerEvent.PlaybackQueueEnded, async (data : any) => {
      console.log(await TrackPlayer.getRepeatMode());
    });
    //큐가 음악이 바뀌면 발생하는 이벤트를 등록 : 현재 재생중인 음악을 바꿈.
    TrackPlayer.addEventListener(TrackPlayerEvent.PlaybackTrackChanged, async(finishedTrack : any) => {
      setNowTrackInfo(await TrackPlayer.getTrack(finishedTrack.nextTrack));
    });

    const trackQueue = await TrackPlayer.getQueue();
    if (!trackQueue.length) {
        await TrackPlayer.add([
            {
                url : require('./assets/music/1.m4a'),
                title : '임시용',
                artist : '박권수',
                contentType : 'audio/m4a',
            },
            {
                url : require('./assets/music/1.m4a'),
                title : '두번째곡입니당당',
                artist : '박권수입니다람쥐',
                contentType : 'audio/m4a',
            },
        ]);
        await TrackPlayer.setRepeatMode(RepeatMode.Queue);

        //트랙플레이어의 현재 nowTrackInfo등의 정보 설정
        setNowTrackInfo(await TrackPlayer.getTrack(await TrackPlayer.getCurrentTrack()));
        setNowTrackQueue(await TrackPlayer.getQueue());
        setPlayingState(await TrackPlayer.getState());
    }
  };

  useEffect(() => {
    initializeTrackPlayerSet();
    return () => { console.log('application down'); };
  }, []);

  return (
    <NavigationContainer>
      <AppStack
        nowTrackInfo = {nowTrackInfo}
        setNowTrackInfo = {setNowTrackInfo}

        nowTrackQueue = {nowTrackQueue}
        setNowTrackQueue = {setNowTrackQueue}

        playingState = {playingState}
        setPlayingState = {setPlayingState}
      />
    </NavigationContainer>
  );
};

export default App;
