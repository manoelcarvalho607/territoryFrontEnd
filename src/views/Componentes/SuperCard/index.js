import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles';



import { Alert } from 'react-native';

import group from '../../../../assets/group.png';
import user from '../../../../assets/user.png';
import map from '../../../../assets/map.png';
import mymap from '../../../../assets/mymap.png';

export default function SuperCard({icone, titulo, acao, largura, altura }){

  return (
    <TouchableOpacity onPress={acao}>
      <View style={[styles.card,{width:largura, height: altura}]}>
         <Image source={  icone === 1 ? user : icone === 2 ?  group  : icone === 3 ? map : icone === 4 ? mymap : '' } /> 
        <View style={{height:30}} />
        <Text style={{color: 'white', fontSize: 15}}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  )
} 

