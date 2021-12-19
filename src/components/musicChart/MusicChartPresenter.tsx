import React from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';

// import { Button } from 'react-native-elements';

import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Button,
  Text,
} from 'react-native';

import styles from './MusicChartStyled';

interface MusicChartProps {
  navigation: NavigationProp<{}>;
  route: RouteProp<{}>;
}

const MusicChartPresenter = ({
  navigation,
  route,
  ...props
}: MusicChartProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.headerContainer}>
          <Button
            // onPress={() => alert('차트 보기')}
            title="차트"
            color="#574B90"
          />
          <Button
            // onPress={() => alert('실시간 급상승')}
            title="실시간 급상승"
            color="#574B90"
          />
          <Button
            // onPress={() => alert('장르 테마')}
            title="장르 테마"
            color="#574B90"
          />
          <Button
            // onPress={() => alert('상황')}
            title="상황"
            color="#574B90"
          />
        </View>
        <ScrollView>
          <View style={styles.chartContainer}>
            <Text style={styles.chartContainerTitle}>찾아 보기 &gt;</Text>
            <Text style={styles.chartContainerTitle}>Moving 차트</Text>
            <Text style={styles.chartContainerSubTitle}>
              Moving 최고 인기곡 차트
            </Text>
            <View style={styles.chartRankingContainer}>
              <Image
                style={styles.albumImg}
                source={require('../../../assets/images/album_6.jpg')}
              />
              <Text style={styles.rankingTitle}> 1 </Text>
              <View style={styles.rankingTitleContainer}>
                <Text style={styles.rankingTitle}> Counting Stars </Text>
                <Text style={styles.rankingSubTitle}> BE'O </Text>
              </View>
            </View>
            <View style={styles.chartRankingContainer}>
              <Image
                style={styles.albumImg}
                source={require('../../../assets/images/album_horse.jpg')}
              />
              <Text style={styles.rankingTitle}> 2 </Text>
              <View style={styles.rankingTitleContainer}>
                <Text style={styles.rankingTitle}> 회전목마 </Text>
                <Text style={styles.rankingSubTitle}> sokodomo </Text>
              </View>
            </View>
            <View style={styles.chartRankingContainer}>
              <Image
                style={styles.albumImg}
                source={require('../../../assets/images/album-limousine.jpg')}
              />
              <Text style={styles.rankingTitle}> 3 </Text>
              <View style={styles.rankingTitleContainer}>
                <Text style={styles.rankingTitle}> 리무진 </Text>
                <Text style={styles.rankingSubTitle}> BE'O </Text>
              </View>
            </View>
            <View style={styles.chartRankingContainer}>
              <Image
                style={styles.albumImg}
                source={require('../../../assets/images/album-eleven.jpg')}
              />
              <Text style={styles.rankingTitle}> 4 </Text>
              <View style={styles.rankingTitleContainer}>
                <Text style={styles.rankingTitle}> Eleven </Text>
                <Text style={styles.rankingSubTitle}> IVE(아이브) </Text>
              </View>
            </View>
            <View style={styles.chartRankingContainer}>
              <Image
                style={styles.albumImg}
                source={require('../../../assets/images/album_9.jpg')}
              />
              <Text style={styles.rankingTitle}> 5 </Text>
              <View style={styles.rankingTitleContainer}>
                <Text style={styles.rankingTitle}>
                  만남은 쉽고 이별은 어려워
                </Text>
                <Text style={styles.rankingSubTitle}> 베이식 </Text>
              </View>
            </View>
            <View style={styles.chartRankingContainer}>
              <Image
                style={styles.albumImg}
                source={require('../../../assets/images/album_1.jpg')}
              />
              <Text style={styles.rankingTitle}> 6 </Text>
              <View style={styles.rankingTitleContainer}>
                <Text style={styles.rankingTitle}>매일 크리스마스</Text>
                <Text style={styles.rankingSubTitle}> 다비치 </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MusicChartPresenter;
