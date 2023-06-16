import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  box: {
   textAlign: 'center',
   fontSize : 18,
   color: '#bdbdbd'
   
  }
});

export default styles;