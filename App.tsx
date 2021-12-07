import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TrackPlayer, {
  Event as TrackPlayerEvent,
  RepeatMode,
} from 'react-native-track-player';

import AppStack from './src/navigation/AppStack';

const App = () => {

  const initializeTrackPlayerSet = async () => {
    TrackPlayer.addEventListener(TrackPlayerEvent.PlaybackQueueEnded, async (data : any) => {
      console.log(await TrackPlayer.getRepeatMode());
    });
    TrackPlayer.addEventListener(TrackPlayerEvent.PlaybackTrackChanged, async (data : any) => {
      // console.log(data);
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
    }
  };

  useEffect(() => {
    initializeTrackPlayerSet();
  }, []);

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
