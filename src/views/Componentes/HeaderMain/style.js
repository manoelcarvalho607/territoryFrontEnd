import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#D9B991',
        borderBottomWidth: 5,
        borderBottomColor: '#707070',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent : 'center',
        paddingTop : 0
      },
    notification: {
    position : 'absolute',
    right: 5,
    width: 25,
    height: 25,
  },
  font: {
    color:'white', 
    fontSize: 20, 
    fontWeight:'bold'
  },
  container: {
    flexDirection:'row', 
    justifyContent:'center', 
    alignItems: 'center', 
    width:'100%'
  },
  logo: {
    position : 'absolute',
    right: 340,
    width: 40,
    height: 25,
    backgroundColor: '#fff',
    alignItems: 'center'
    
  },
  box: {
    marginLeft: 10
  }

});


export default styles;