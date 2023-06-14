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


  const usuario = [{id: 1, nameUser: 'Robério', email: 'roberio@gmail.com', phone: '14997607802', schema: 'admin', numberCong: '69100', senha: '12345' },
                  {id: 2, nameUser: 'jonathan', email: 'jonathan@gmail.com', phone: '14997607801', schema: 'admin', numberCong: '69200', senha: '1234' },
                  {id: 3, nameUser: 'Alcides', email: 'alcides@gmail.com', phone: '14997607803', schema: 'user', numberCong: '69100', senha: '123456' }]
    
    const [carga, setCarga] = useState(false);
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const {perfilUser, setPerfilUser, auth, setAuth} = useContext(GlobalContext);

    const handleTelefoneChange = (novoTelefone) => {
        setTelefone(novoTelefone);
      }

    const handleSenhaChange = (novaSenha) => {
        setSenha(novaSenha);
      }

    function login(telefone) {
        
        if(telefone === '') {
            Alert.alert("Informe o Telefone");
            return;
        }
        const telefoneLimpo = telefone.replace(/\D/g, '');
        if(telefoneLimpo.length <= 9) {
            Alert.alert("Informe o Telefone Completo");
            return;
        }

        // const url1 = api+"/perfil/buscaportelefone/"+telefoneLimpo;

        response = usuario.filter(item => item.phone === telefoneLimpo)
                            .map((item) => item.phone)
          console.log(response)

        if(telefoneLimpo != response) {
          Alert.alert("Usuário não cadastrado!");
         // setCarga(true);
        } else {
          usuario.filter(item => item.phone === telefoneLimpo)
             .map((user) => {
             // setCarga(false);
              setTelefone(user.phone);
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

      function validarSenha(novaSenha) {
        console.log("senha: " + perfilUser.senha)
        if(novaSenha === perfilUser.senha) {
          navigation.navigate('Menu');
        } else {
          Alert.alert("Senha Inválida");
        }
      }

    //   function cadastrar() {
    //     navigation.navigate('CadastrarPerfil');
    //   }

      function recuperarSenha() {
        navigation.navigate('RecuperarSenha',{telefone:telefone});
      }
     

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
                                    onLogar={() => login(telefone)}
                                    onTelefoneChange={handleTelefoneChange} tela={'telefone'} >
                                    
                                    </Login>
                                    
                                </View>
                                ) : ( 

                                <View style={{flex:1, justifyContent : 'flex-end', width: '100%', alignItems:'center'}}>
                                <CardCenterInput nameUser={perfilUser.nameUser} titulo={'BEM VINDO'} dados={'Informe Sua Senha'} 
                                onAutentica={() => {validarSenha(senha)}} onRecuperar={() => { recuperarSenha() }} onSenhaChange={handleSenhaChange} tela={'senha'} />
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