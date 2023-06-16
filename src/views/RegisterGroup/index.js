import React, { useState, useEffect, useContext } from 'react';
import { Platform, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView,ImageBackground,Image, Alert, View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import Header from '../Componentes/Header';
import Login from '../Componentes/Login';
import styles from './style';
import Footer from '../Componentes/Footer';
import api from '../../services/api';
import map from '../../../assets/mapa.jpg';
import { GlobalContext } from '../../GlobalContext';
import SuperCard from '../Componentes/SuperCard';
import Button from '../Componentes/Button';

export default function RegisterGroup({ navigation }) {

  const {perfilUser} = useContext(GlobalContext);
  const [carga, setCarga] = useState(false);
  const { width, height } = Dimensions.get('window');
  const [ nameGroup, setNameGroup] = useState('');
  const [ numberCong, setNumberCong] = useState('');
  const [message, setMessage] = useState('');

  function registerGroup() {
    if(nameGroup === '') {
      Alert.alert("Informe o nome do Grupo");
      return;
    }

    

    console.log("dados :" + nameGroup , perfilUser.numberCong)
    setMessage("Cadastro feito com sucesso!");
    setNameGroup('');
   
    setTimeout(() => {
      navigation.navigate('Menu');
      setMessage('');
    }, 3000);
    
    // setCarga(true);

    // fetch(api+'/perfil/atualizarperfil', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //     //,'Authorization': 'Bearer ' + token // opcional, caso o serviço exija autenticação
    //   },
    //   body: JSON.stringify({
    //     id : perfilUsuario.id,
    //     idEmpresa : perfilUsuario.idEmpresa,
    //     perfil : perfilUsuario.perfil,
    //     cadastroValido : perfilUsuario.cadastroValido,
    //     dataUltimoAcesso : perfilUsuario.dataUltimoAcesso,
    //     dataCadastro : perfilUsuario.dataCadastro,
    //     secreta : perfilUsuario.secreta,
    //     telefone : telefone,
    //     nome : nome,
    //     senha : senha,
    //     email : email 
    //   })
    // })
    // .then(() => {
    //     setCarga(false); 
    //     let perfil = perfilUsuario;
    //     perfil.nome = nome;
    //     perfil.telefone = telefone;
    //     perfil.senha = senha;
    //     perfil.email = email;
    //     setPerfilUsuario(perfil);
    //     navigation.navigate('Menu');
    //   })
    // .catch(error => {Alert.alert(error);setCarga(false); return});
  }

    return (
        <View style={{flex : 1}} >

          { carga ? 
            ( <ActivityIndicator color='#EE6B26' size={150} style={styles.activityindicator}/> ) 
            :     
            (<View></View>)
          } 
          <View style={{flex:1}}>
            <Header navigation={navigation}/>
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : -130} >
                <ScrollView contentContainerStyle={{ flexGrow: 1}} keyboardShouldPersistTaps='handled'>
                    <View style={{alignItems:'center', marginTop:20}}>
                        <Text style={{fontSize:25}}>CADASTRAR NOVO GRUPO</Text>
                        <View style={{height:30}} />
                          <Text style={{fontSize:20, alignItems: 'center'}}>{message}</Text>
                        <View style={{height:20}} />
                        <TextInput style={styles.input} value={nameGroup} placeholder={'Informe o nome do grupo'} onChangeText={setNameGroup}/>
                        <View style={{height:20}} />
                        <View style={styles.input}><Text style={styles.box}>Nº Cong: {perfilUser.numberCong}</Text></View>
                        <View style={{height:20}} />
                   
                        <Button acao={() => { registerGroup() }} largura={320} altura={45} titulo={'CONFIRMAR'}></Button>
                    </View> 
                </ScrollView>

            </KeyboardAvoidingView>
            <Footer />
          </View>
       </View>

    )
}