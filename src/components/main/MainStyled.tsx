import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  recommendContainer: {
    backgroundColor: '#fff',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
  },
  todayRecommendContainer: {
    // backgroundColor: '#C4C4C2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '5%',
  },

  settingContainer: {
    // backgroundColor: '#C2C2C2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: '5%',
  },
  todayRecommendTitle: {
    fontFamily: 'Jua-Regular',
    fontSize: 18,
    color: '#FFF',
    fontWeight: '300',
    marginBottom: '2%',
  },
  similarMusicTitle: {
    fontFamily: 'Jua-Regular',
    color: '#fff',
    fontSize: 24,
    fontWeight: '300',
  },
  similarMusicDetailTitle: {
    fontFamily: 'Cafe24SsurroundAir',
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '300',
    marginTop: '2%',
  },
  recommendAlbumImgContainer: {
    backgroundColor: '424C4C',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
  },
  recommendAlbumImg: {
    width: 100,
    height: 100,
    backgroundColor: '#4C4C4C',
  },
  recommendAlbumImgCenter: {
    width: 120,
    height: 120,
    backgroundColor: '#4C4C4C',
  },
  morningRecContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  albumImgContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumImgFirstContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  albumContainerTitle: {
    marginTop: '4%',
    marginLeft: '2%',
    marginBottom: '2%',
    fontFamily: 'Jua-Regular',
    fontSize: 18,
    color: '#000',
    fontWeight: '300',
  },
  albumImg: {
    width: 100,
    height: 100,
  },
  albumContainer: {
    marginTop: '2%',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  albumTitle: {
    marginTop: '4%',
    fontFamily: 'Jua-Regular',
    fontSize: 14,
    fontWeight: '300',
  },
  albumSingerTitle: {
    marginTop: '4%',
    fontFamily: 'Jua-Regular',
    fontSize: 12,
    fontWeight: '100',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    marginBottom: '15%',
  },
});

export default styles;
