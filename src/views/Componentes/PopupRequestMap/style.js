import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  popup: {
    
    width: 310,
    height: 430,
    paddingTop: 30,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: '#D9B991',
    

  },
  menu: {
    width: 310,
    height: 310,
    borderBottomWidth: 2,
    borderBottomColor: '#707070',
    backgroundColor: '#ffffff',
    textAlign: 'center'

  },
  box1: {
    width: 310,
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#707070',
    backgroundColor: '#ffffff',
    textAlign: 'center'

  },
  box2: {
    marginTop: 15,
    width: 310,
    height: 100,
    
  },
  titulo1: {
    fontSize: 20,
    margin: 5,
    textAlign: 'center'
  },
  box4: {
    marginTop: 40,
    marginLeft: 15,
    width: 280,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    paddingHorizontal: 280
  },
  button: {
    paddingHorizontal: 280
  }
});

export default styles;