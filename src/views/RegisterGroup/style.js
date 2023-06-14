import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    alignContent: 'center',
    verticalAlign : 'center',
  },
  splash: {
    width : '100%',
    height : '100%',
    top : -10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height : 45,
    width : 300,
    textAlign : 'center',
    padding: 10,
    fontSize : 18,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: 'gray',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: .6,
    shadowRadius: 4,
    elevation: 15,
    borderRadius: 14
  },
  activityindicator : {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 9999
  },
  filter: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    height: 70,
    alignItems: 'center'
  },
  filterTextActived: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#EE6B26'
  },
  filterTextInative: {
    color: '#20295f',
    fontWeight: 'bold',
    fontSize: 18,
    opacity: 0.5
  },
  content: {
    width: '100%',
    marginTop: 30
  },
  title: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#20295f',
    alignItems: 'center'
  },
  titleText: {
    color: '#20295f',
    fontSize: 18,
    position: 'relative',
    top: 11,
    backgroundColor: '#FFF',
    paddingHorizontal: 10
  }
});

export default styles;