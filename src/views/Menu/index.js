import React, { useState, useEffect, useContext } from 'react';
import { Platform, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView,ImageBackground,Image, Alert, View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import Header from '../Componentes/Header';
import Login from '../Componentes/Login';
import Styles from './style';
import Footer from '../Componentes/Footer';
import api from '../../services/api';
import map from '../../../assets/mapa.jpg';
import { GlobalContext } from '../../GlobalContext';
import SuperCard from '../Componentes/SuperCard';


export default function Menu({ navigation }){
   
  
  const [carga, setCarga] = useState(false);
  const { width, height } = Dimensions.get('window');
  const {perfilUsuario, setPerfilUsuario, setIconLogout} = useContext(GlobalContext);
  const [tamanhoCard, setTamanhoCard] = useState(132);
  const [espaco, setEspaco] = useState(18);
  const [os, setOs] = useState('ios');

  useEffect(() => {

    setOs(Platform.OS === 'ios' ? 'IOS' : 'ANDROID');

   
     const headerFooter = 110;
     setTamanhoCard(parseInt((((height - headerFooter)/4)/100)*72));
     setEspaco(parseInt((((height - headerFooter)/4)/100)*10));
     const tamanho = parseInt(tamanhoCard);
     const esp = parseInt(espaco);
     setTamanhoCard(tamanho);
     setEspaco(esp);
     setIconLogout(true);
   }, []);


   function registerAdmin() {
    navigation.navigate("RegisterAdmin");
   }
   function registerUser() {
    navigation.navigate("RegisterUser");
   }
   function registerMap() {
    navigation.navigate("RegisterMap");
   }
   function requestMap() {
    navigation.navigate("RequestMap");
   }


    return (

         
      <View style={{flex : 1}} >

          { carga ? 
            ( <ActivityIndicator color='#EE6B26' size={150} style={Styles.activityindicator}/> ) 
            :     
            (<View></View>)
          } 
          <View style={{flex:1}}>
            <Header navigation={navigation}/>
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={os === 'IOS' ? 50 : -130} >
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent:'center'}} keyboardShouldPersistTaps='handled'>
                  <View style={{alignItems:'center', height:'100%', alignContent:'center'}}>
                      <View style={{height:espaco+(os === 'IOS' ? 10 : 20)}} />

                        <SuperCard acao={registerAdmin} icone={1} largura={width-50} altura={tamanhoCard} titulo={'REGISTRAR ADMIN'} />
                        <View style={{height:espaco}} /> 
                        <SuperCard acao={registerUser} icone={1} largura={width-50} altura={tamanhoCard} titulo={'REGISTRAR USUÁRIO'} />
                        <View style={{height:espaco}} /> 
                        <SuperCard acao={registerMap} icone={1} largura={width-50} altura={tamanhoCard} titulo={'REGISTRAR MAPA'} />
                        <View style={{height:espaco}} /> 
                        <SuperCard acao={requestMap} icone={1} largura={width-50} altura={tamanhoCard} titulo={'SOLICITAR MAPA'} />
                        <View style={{height:espaco}} /> 
                  </View>
                  <View style={{height:espaco}} /> 
                
                </ScrollView>

            </KeyboardAvoidingView>
            <Footer />
            {/* <FooterMenu navigation={navigation}/> */}
          </View>
       </View>
     

    )
}