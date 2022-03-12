import {StyleSheet} from 'react-native';
import {colors} from '../config/colors';
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  headingWrapper: {
    marginTop: 20,
  },
  heading: {
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    fontSize: 28,
    color: colors.heading,
  },
  subHeading: {
    fontFamily: 'HelveticaNeue',
    color: colors.heading,
    fontSize: 28,
    marginTop: 10,
  },
  title: {
    fontFamily: 'HelveticaNeue',
    fontSize: 20,
    fontWeight: '300',
    marginTop: 10,
    color: colors.gray,
  },
  bgImage: {
    position: 'absolute',
    top: '15%',
  },
  scrollViewWrapper: {
    justifyContent: 'space-between',
    marginTop: 30,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {},
  label: {
    fontFamily: 'HelveticaNeue',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
  },
  topicImage: {
    alignSelf: 'center',
    height: 145,
    width: 145,
    flex: 1,
  },
  card: {
    padding: 10,
    flex: 1,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOffset: {height: 15},
    shadowRadius: 15,
    shadowOpacity: 10,
    elevation: 5,
    backgroundColor: 'white',
    marginHorizontal: 1,
  },
});
