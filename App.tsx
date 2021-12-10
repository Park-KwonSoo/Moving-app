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
      //TrackPlayer에 capabilty 등록 : status bar에서 컨트롤 가능하게 함.
      TrackPlayer.updateOptions({
        capabilities : [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ],
      });

      const trackQueue = await TrackPlayer.getQueue();
      if (!trackQueue.length) {
          TrackPlayer.add([
              {
                  url : require('./assets/music/1.m4a'),
                  title : '임시용',
                  artist : '박권수',
                  contentType : 'audio/m4a',
                  index : 0,
                  pitchAlgorithm : PitchAlgorithm.Music,
              },
              {
                  url : require('./assets/music/1.m4a'),
                  title : '두번째곡입니당당',
                  artist : '박권수입니다람쥐',
                  contentType : 'audio/m4a',
                  index : 1,
                  pitchAlgorithm : PitchAlgorithm.Music,
              },
          ]);
      }

    };
    initializeTrackPlayerSet();

    return () => { console.log('app down'); };
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
