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

export default function RegisterAdmin({ navigation }) {

  const [carga, setCarga] = useState(false);
  const { width, height } = Dimensions.get('window');





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
                <Text>TELA EM DESENVOLVIMENTO</Text>
{/*                    
                    <View style={{alignItems:'center', marginTop:20}}>
                        <Text style={{fontSize:25}}>Atualização de Perfil de Usuário</Text>
                        <View style={{height:30}} />
                        <Text>FUNCIONÁRIO : {telefone}</Text>
                        <View style={{height:20}} />
                        <TextInput style={styles.input} value={nome} placeholder={'Informe Seu Nome'} onChangeText={setNome}/>
                        <View style={{height:20}} />
                        <TextInput style={styles.input} value={email} placeholder={'Informe Seu Email'} onChangeText={setEmail} />
                        <View style={{height:20}} />
                        <TextInput style={styles.input} secureTextEntry value={senha} placeholder={'Informe Sua Senha'} onChangeText={setSenha}/>
                        <View style={{height:20}} />
                        <TextInput style={styles.input} secureTextEntry value={senha2} placeholder={'Confirme Sua Senha'} onChangeText={setSenha2} />
                        <View style={{height:20}} />
                        <Botao acao={() => { confirmarPerfil() }} largura={320} altura={45} titulo={'CONFIRMAR ATUALIZAÇÃO DE PERFIL'}></Botao>
                    </View> */}
                </ScrollView>

            </KeyboardAvoidingView>
            <Footer />
          </View>
       </View>

    )
}