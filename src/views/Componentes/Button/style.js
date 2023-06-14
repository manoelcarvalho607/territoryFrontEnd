import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor : '#73614C',
    alignItems : 'center',
    shadowColor: 'black',
    alignItems:'center', 
    alignContent: 'center', 
    justifyContent: 'center',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: .6,
    shadowRadius: 4,
    elevation: 15,
    borderRadius: 15
  },
  containerTouch: {
    flex : 1,
    top : 90,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent : 'space-between'
  },
  containerBotao : { 
    width : '20%',
    alignItems : 'center', 
  },
  botao: {
    resizeMode : 'contain'
  },
  input: {
    top : 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    height : 45,
    width : '80%',
    textAlign : 'center',
    padding: 10,
    fontSize : 18,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: 'white',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: .6,
    shadowRadius: 4,
    elevation: 15,
    borderRadius: 14
  },
  cardTitle: {
    top : 10,
    color : 'white',
    marginLeft: 10, 
    fontSize: 20
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  typeActive: {
    width: 50,
    height: 50
  },
 
  cardRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  cardDate: {
    color: '#EE6B26',
    fontWeight: 'bold',
    fontSize: 16
  },
  cardTime: {
    color: '#707070'
  },
  done: {
    opacity: 0.5,
    textAlign : 'left'
  }
});

export default styles;