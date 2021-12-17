import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TrackPlayer, {
  RepeatMode,
  PitchAlgorithm,
  Capability,
} from 'react-native-track-player';

import useAsyncStorage from './src/util/useAsyncStorage';

import AppStack from './src/navigation/AppStack';


const App = () => {

  const [storedLoopMode, setStoredLoopMode] = useAsyncStorage('loopMode', String(RepeatMode.Off));
  const [storedShuffleMode, setStoredShuffleMode] = useAsyncStorage('shuffleMode', 'false');

  useEffect(() => {
    const initializeTrackPlayerSet = async () => {
      await TrackPlayer.setupPlayer({});
      //TrackPlayer에 capabilty 등록 : status bar에서 컨트롤 가능하게 함.
      TrackPlayer.updateOptions({
        capabilities : [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ],
      });

    };
    initializeTrackPlayerSet();

    return () => {
      TrackPlayer.stop();
      console.log('app down');
    };
  }, []);


  useEffect(() => {
    TrackPlayer.setRepeatMode(parseInt(storedLoopMode, 10));
  }, [storedLoopMode]);


  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
};

export default App;
