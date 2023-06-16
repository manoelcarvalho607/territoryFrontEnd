import React, { useState, useEffect, useContext } from 'react';
import { Platform, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView,ImageBackground,Image, Alert, View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import Header from '../Componentes/Header';
import Login from '../Componentes/Login';
import CardCenterInput from '../Componentes/CardCenterInput';
import Styles from './style';
import Footer from '../Componentes/Footer';
import api from '../../services/api';
import map from '../../../assets/mapa.jpg';
import { GlobalContext } from '../../GlobalContext';

 
const { width, height } = Dimensions.get('window');

export default function Home({navigation}) {


  const usuario = [{id: 1, nameUser: 'Robério', email: 'roberio@gmail.com', phone: '14997607802', password: '12345', schema: 'user', numberCong: '1100'},
                  {id: 2, nameUser: 'jonathan', email: 'jonathan@gmail.com', phone: '14997607801', password: '1234', schema: 'admin' , numberCong: '1200'}]
    
    const [carga, setCarga] = useState(false);
    const [localPhone, setLocalPhone] = useState('');
    const [localPassword, setLocalPassword] = useState('');
    const {perfilUser, setPerfilUser, auth, setAuth} = useContext(GlobalContext);

    const handlePhoneChange = (newPhone) => {
        setLocalPhone(newPhone);
      }

    const handlePasswordChange = (newPassword) => {
        setLocalPassword(newPassword);
      }

    function login(localPhone) {
        
        if(localPhone === '') {
            Alert.alert("Informe o Telefone");
            return;
        }
        const cleanPhone = localPhone.replace(/\D/g, '');
        if(cleanPhone.length <= 9) {
            Alert.alert("Informe o Telefone Completo");
            return;
        }

        // const url1 = api+"/perfil/buscaportelefone/"+telefoneLimpo;

        response = usuario.filter(item => item.phone === cleanPhone)
                            .map((item) => item.phone)
          console.log(response)

        if(cleanPhone != response) {
          Alert.alert("Usuário não cadastrado!");
          //setCarga(true);
        } else {
          usuario.filter(item => item.phone === cleanPhone)
             .map((user) => {
             // setCarga(false);
              setLocalPhone(user.phone);
              setPerfilUser(user);
              setAuth(user.schema);
              console.log("dados: " + JSON.stringify(user))
             })
          
        }
      
    
        // fetch(url1)
        //   .then(response => response.json())
        //   .then(json => {
        //       if(json.cadastroValido === 1) {
        //         setPerfilUser(json); 
        //         setCarga(false);
        //       } else {
        //         setCarga(false);
        //         Alert.alert("Perfil Não Confirmado. Verifique Seu Email");
        //       }
        //   })
        //   .catch(error => {
        //         Alert.alert("Usuário Não Encontrado");
        //         setCarga(false);   
        //   });


      }

      function validatePassword(newPassword) {
        console.log("senha: " + perfilUser.password)
        if(newPassword === perfilUser.password) {
          navigation.navigate('Menu');
        } else {
          Alert.alert("Senha Inválida");
        }
      }

    //   function cadastrar() {
    //     navigation.navigate('CadastrarPerfil');
    //   }

      // function recoverPassword() {
      //   navigation.navigate('RecuperarSenha',{phone:phone});
      // }
     

    return (
        <View style={{flex : 1}} >
          {carga ? (
            <ActivityIndicator color='#EE6B26' size={150} style={Styles.activityindicator}/>
          ) : (<View></View>)} 
            <View style={{flex:1}}>
                <Header navigation={navigation}/>
                <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : -210} >
                <ScrollView contentContainerStyle={{ flexGrow: 1, width : '100%'}} keyboardShouldPersistTaps='handled'>
                    <ImageBackground source={map} style={{width : width,height : height-250,top : -10,alignItems:'center', resizeMode : 'cover'}}>
                        {perfilUser === null ? (

                                <View style={{flex:1, justifyContent : 'flex-end', width: '100%', alignItems:'center'}}>
                                    <Login titulo={'L O G I N'} dados={'Informe Seu Telefone'} 
                                  //  onCadastrar={() => cadastrar()}
                                    onLogar={() => login(localPhone)}
                                    onPhoneChange={handlePhoneChange} tela={'telefone'} >
                                    
                                    </Login>
                                    
                                </View>
                                ) : ( 

                                <View style={{flex:1, justifyContent : 'flex-end', width: '100%', alignItems:'center'}}>
                                <CardCenterInput nameUser={perfilUser.nameUser} titulo={'BEM VINDO'} dados={'Informe Sua Senha'} 
                                onAutentica={() => {validatePassword(localPassword)}} onRecuperar={() => { recoverPassword() }} onPasswordChange={handlePasswordChange} tela={'senha'} />
                                </View>

                        )}
                    </ImageBackground>
                </ScrollView>
                </KeyboardAvoidingView>
            </View>
            <Footer />
        </View>
    )
}