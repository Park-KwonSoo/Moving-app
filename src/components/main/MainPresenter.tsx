import React from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
} from 'react-native';

import styles from './MainStyled';

interface MainProps {
  navigation: NavigationProp<{}>;
  route: RouteProp<{}>;
}

const MainPresenter = ({navigation, route, ...props}: MainProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <ScrollView>
          <View style={styles.recommendContainer}>
            <ImageBackground
              source={require('../../../assets/images/album_8.jpg')}
              style={styles.image}>
              <View style={styles.todayRecommendContainer}>
                <View style={styles.settingContainer}>
                  <Text>버튼</Text>
                </View>
                <Text style={styles.todayRecommendTitle}>오늘의 추천</Text>
                <Text style={styles.similarMusicTitle}>요즘 들은 곡과</Text>
                <Text style={styles.similarMusicTitle}>비슷한 음악</Text>
                <Text style={styles.similarMusicDetailTitle}>
                  총 30 곡 2021.12.20 NEW
                </Text>
                <View style={styles.recommendAlbumImgContainer}>
                  <Image
                    style={styles.recommendAlbumImg}
                    source={require('../../../assets/images/album_3.jpg')}
                  />
                  <Image
                    style={styles.recommendAlbumImgCenter}
                    source={require('../../../assets/images/album_2.jpg')}
                  />
                  <Image
                    style={styles.recommendAlbumImg}
                    source={require('../../../assets/images/album_4.jpg')}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.morningRecContainer}>
            <Text style={styles.albumContainerTitle}>
              낮에 듣기 좋은 앨범 &gt;{' '}
            </Text>
            <View style={styles.albumImgFirstContainer}>
              <View style={styles.albumContainer}>
                <Image
                  style={styles.albumImg}
                  source={require('../../../assets/images/album_5.jpg')}
                />
                <Text style={styles.albumTitle}>More Than</Text>
                <Text style={styles.albumSingerTitle}>24KGoldn</Text>
              </View>
              <View style={styles.albumContainer}>
                <Image
                  style={styles.albumImg}
                  source={require('../../../assets/images/album_6.jpg')}
                />
                <Text style={styles.albumTitle}>Hapyy New Year</Text>
                <Text style={styles.albumSingerTitle}>Lova</Text>
              </View>
              <View style={styles.albumContainer}>
                <Image
                  style={styles.albumImg}
                  source={require('../../../assets/images/album_7.jpg')}
                />
                <Text style={styles.albumTitle}>Perfect</Text>
                <Text style={styles.albumSingerTitle}>Kav Verhouzer</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MainPresenter;
