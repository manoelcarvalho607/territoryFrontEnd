import React, {useContext, useState} from 'react';
import { Alert, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { GlobalContext } from '../../../GlobalContext';

//ICONES
import iconsBrown from '../../../../assets/iconsBrown.png';
import iconRed from '../../../../assets/iconRed.png';



export default function Header({navigation, option}) {
    const { statusSino, setStatusSino, auth, setAuth, authTrue, setAuthTrue,
        perfilUser, setPerfilUser, iconLogout, setIconLogout} = useContext(GlobalContext);
   
    


    function logout() {
        navigation.navigate('Home')
        setPerfilUser(null);
        setIconLogout(false);
        setAuth('');
        setAuthTrue(false);
    }

    function notificacao() {
        Alert.alert('EM DESENVOLVIMENTO...');
    }
  
    function goBack() {
    //  navigation.goBack();
    }
  
    function goHome() {
      navigation.navigate('Menu');
        
    //   if(perfilUser === null || empresa === null) {
    //     navigation.navigate('Home');
    //   } else {
    //     navigation.navigate('Menu');
    //   }
    }

    return(
        <View style={styles.header}>
         
            <View style={styles.container}>
            { iconLogout ? ( 
                 <View style={styles.logo} >
                    <TouchableOpacity  activeOpacity = { .5 } onPress={logout}>
                        <Text style={{fontSize: 15, }}>Sair</Text>
                    </TouchableOpacity>
                 </View>
                    ) :(<View></View>) } 
               
                    

                    <View style={styles.box} >
                        <Text style={styles.font}>Usuário: {perfilUser.nameUser} </Text>
                    </View>
                    <View>
                        <Text style={styles.font}> Nº {perfilUser.numberCong} </Text>
                    </View>

                    <View style={styles.notification} >
                        <TouchableOpacity  activeOpacity = { .5 } onPress={notificacao}>
                            <Image source={statusSino === 2 ? iconRed  : iconsBrown } style={styles.notification}></Image>
                        </TouchableOpacity>
                    </View>
            </View>
    </View>
    )
}
