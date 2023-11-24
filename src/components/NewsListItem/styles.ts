import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    paddingVertical: 12,
    paddingRight: 8,
  },
  scoreView: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  commentsView: {
    width: 80,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  scoreText: {
    color: '#FF6600',
    fontWeight: 'bold',
  },
  sideView: {
    flex: 1,
  },
  title: {
    fontWeight: '500',
    fontSize: 14,
    marginRight: 12,
  },
  time: {
    fontSize: 12,
    paddingTop: 4,
  },
  commentAndBookmark: {
    flexDirection: 'row',
    paddingTop: 4,
  },
  labelWithIcon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  label: {
    marginLeft: 2,
  },
  bottomSheetBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
