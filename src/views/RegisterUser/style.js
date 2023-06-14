import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    alignContent: 'center',
    verticalAlign : 'center',
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
  }
});

export default styles;