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

export default function RegisterUser({ navigation }) {

  const [carga, setCarga] = useState(false);
  const { width, height } = Dimensions.get('window');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [numberCong, setNumberCong] = useState('');
  const [schema, setSchema] = useState('');
  const [message, setMessage] = useState('');

  function registerUser() {
    if(name === '') {
      Alert.alert("Informe Seu Nome");
      return;
    }

    if(email === '') {
      Alert.alert("Informe Seu E-mail");
      return;
    }

    if(phone === '') {
      Alert.alert("Informe Seu Telefone");
      return;
    }

    if(schema === '') {
      Alert.alert("Informe Seu perfil: admin ou user");
      return;
    }

    if(numberCong === '') {
      Alert.alert("Informe o numero da sua congregação");
      return;
    }

    if(password === '') {
      Alert.alert("Informe Sua Senha");
      return;
    }

    if(password2 === '') {
      Alert.alert("Confirme Sua Senha");
      return;
    }

    if(password != password2) {
      Alert.alert("Confirmação Da Senha Inválida");
      return;
    }
    

    console.log("dados :" + name,email,phone,schema,numberCong,password)
    setMessage("Cadastro feito com sucesso!");
    setName('');
    setEmail('');
    setPhone('');
    setSchema('');
    setNumberCong('');
    setPassword('');
    setPassword2('');
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
  };

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
                          <View style={{alignItems:'center', marginTop:20}}>
                              <Text style={{fontSize:25}}>CADASTRO DE USUÁRIO</Text>
                              <View style={{height:30}} />
                              <Text style={{fontSize:20, alignItems: 'center'}}>{message}</Text>
                              <View style={{height:20}} />
                              <TextInput style={styles.input} value={name} placeholder={'Informe Seu Nome'} onChangeText={setName}/>
                              <View style={{height:20}} />
                              <TextInput style={styles.input} value={email} placeholder={'Informe Seu Email'} onChangeText={setEmail} />
                              <View style={{height:20}} />
                              <TextInput style={styles.input} value={phone} placeholder={'Informe Seu Telefone'} onChangeText={setPhone} />
                              <View style={{height:20}} />
                              <TextInput style={styles.input} value={schema} placeholder={'Informe perfil: admin ou user'} onChangeText={setSchema} />
                              <View style={{height:20}} />
                              <TextInput style={styles.input} value={numberCong} placeholder={'Informe numero da congregação'} onChangeText={setNumberCong} />
                              <View style={{height:20}} />
                              <TextInput style={styles.input} secureTextEntry value={password} placeholder={'Informe sua Senha'} onChangeText={setPassword}/>
                              <View style={{height:20}} />
                              <TextInput style={styles.input} secureTextEntry value={password2} placeholder={'Confirme Sua Senha'} onChangeText={setPassword2} />
                              <View style={{height:20}} />
                              
                              <Button acao={() => { registerUser() }} largura={320} altura={45} titulo={'CADASTRAR'}></Button>
                          </View> 
                    </View>
               </ScrollView>

            </KeyboardAvoidingView>
            <Footer />
          </View>
       </View>

    )
}