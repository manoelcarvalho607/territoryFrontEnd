import React, { useState, useEffect, useContext } from 'react';
import {} from 'react-native';
import { Platform, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView,ImageBackground,Image, Alert, View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import Header from '../Componentes/Header';
import Styles from './style';
import Footer from '../Componentes/Footer';

import { GlobalContext } from '../../GlobalContext';

export default function Template({}) {
    return (
        <View style={{flex : 1}} >

        { carga ? 
          ( <ActivityIndicator color='#EE6B26' size={150} style={Styles.activityindicator}/> ) 
          :     
          (<View></View>)
        } 
        <View style={{flex:1}}>
          <Header navigation={navigation}/>
          <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : -130} >
              <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent:'center'}} keyboardShouldPersistTaps='handled'>
                
            
              </ScrollView>

          </KeyboardAvoidingView>
          <Footer />
        </View>
     </View>

    )
}