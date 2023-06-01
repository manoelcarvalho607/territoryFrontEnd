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

export default function RegisterUser({ navigation }) {

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
               
               <View style={styles.container}>
                <Text>TELA EM DESENVOLVIMENTO</Text>
               </View>

            </KeyboardAvoidingView>
            <Footer />
          </View>
       </View>

    )
}