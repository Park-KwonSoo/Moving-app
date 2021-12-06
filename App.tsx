import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TrackPlayer, {
  Event as TrackPlayerEvent,
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
