import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '85%',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '2%',
  },
  headerButton: {
    backgroundColor: '#574B90',
    alignItems: 'center',
    fontColor: '#fff',
    justifyContent: 'center',
    width: 70,
    height: 70,
    marginBottom: 30,
    borderRadius: 35,
  },
  chartContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  chartContainerTitle: {
    marginTop: '4%',
    marginLeft: '2%',
    marginBottom: '2%',
    fontFamily: 'Jua-Regular',
    fontSize: 18,
    color: '#000',
    fontWeight: '300',
  },
  chartContainerSubTitle: {
    marginLeft: '2%',
    marginBottom: '2%',
    fontFamily: 'Jua-Regular',
    fontSize: 14,
    color: '#C4C4C4',
    fontWeight: '300',
  },
  chartRankingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2%',
  },
  albumImg: {
    marginLeft: '2%',
    width: 50,
    height: 50,
  },
  rankingTitle: {
    marginLeft: '4%',
    marginRight: '4%',
    fontFamily: 'Cafe24SsurroundAir',
    fontSize: 18,
    fontWeight: '300',
  },
  rankingSubTitle: {
    marginLeft: '5%',
    marginRight: '4%',
    fontFamily: 'Jua-Regular',
    fontSize: 14,
    fontWeight: '300',
    color: '#C4C4C4',
  },
  rankingTitleContainer: {
    flexDirection: 'column',
  },
  wrapper: {
    width: '100%',
    height: '85%',
    marginBottom: '15%',
  },
});

export default styles;
