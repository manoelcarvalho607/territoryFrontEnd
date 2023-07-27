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
import  UploadImage from '../Componentes/UploadImage';
import * as ImagePicker from 'expo-image-picker';
import Button from '../Componentes/Button';

export default function RegisterMap({ navigation }) {

  const [carga, setCarga] = useState(false);
  const { width, height } = Dimensions.get('window');
  const {image, setImage} = useContext(GlobalContext);
  const [nameNeighborhood, setNameNeighborhood] = useState('');
  const [numberMap, setNumberMap] = useState('');
  const [message, setMessage] = useState('');

  const registerMap = () => {

    if(image === null) {
      Alert.alert("Adicione um mapa");
      return;
    }

    if(nameNeighborhood === '') {
      Alert.alert("Informe o bairro");
      return;
    }

    if(numberMap === '') {
      Alert.alert("Informe o número do território");
      return;
    }

 

    console.log(image)
    console.log(nameNeighborhood)
    console.log(numberMap)

    setMessage("Cadastro feito com sucesso!");
    setImage(null)
    setNameNeighborhood('')
    setNumberMap('')


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
            <ScrollView>
               <View style={styles.container}>
                  <View style={styles.box1}>
                      <UploadImage/>
                  </View>
                  <View style={{height: 15}}></View>
                  <View></View>
                  <TextInput style={styles.input} value={nameNeighborhood} placeholder={'Informe o nome do bairro'} onChangeText={setNameNeighborhood}/>
                  <View style={{height:20}} />
                  <TextInput style={styles.input} value={numberMap} placeholder={'Informe o número do mapa'} onChangeText={setNumberMap}/>
                  <View style={{height:20}} />
                  <Text style={{fontSize:20, alignItems: 'center'}}>{message}</Text>
                  <View style={{height:20}} />
                  <Button acao={() => { registerMap() }} largura={320} altura={45} titulo={'CADASTRAR'}></Button>
                  <View style={{height:20}} />
               </View>
            </ScrollView>
            </KeyboardAvoidingView>
            <Footer />
          </View>
       </View>

    )
}