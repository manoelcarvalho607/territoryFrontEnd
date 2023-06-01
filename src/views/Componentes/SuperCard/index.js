import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles';

// import usuarioAdicionar from '../../../../assets/usuarioAdicionar.png';
// import usuarioConfirmar from '../../../../assets/usuarioConfirmar.png';
// import botaook from '../../../../assets/botaook.png';
// import voltar from '../../../../assets/voltar.png';

import { Alert } from 'react-native';

// import guardasol from '../../../../assets/guardasol.png';
// import cozinha from '../../../../assets/cozinha.png';
// import fecharconta from '../../../../assets/fecharconta.png';
// import administrativo from '../../../../assets/administrativo.png';
// import entrega from '../../../../assets/entrega.png';
// import mesa from '../../../../assets/mesa.png'; 
// import cozinhaBar from '../../../../assets/cozinhaBar.png'; 
// import funcionario from '../../../../assets/funcionario.png'; 



export default function SuperCard({icone, titulo, acao, largura, altura }){

  return (
    <TouchableOpacity onPress={acao}>
      <View style={[styles.card,{width:largura, height: altura}]}>
        {/* <Image source={  icone === 1 ? mesa : icone === 2 ?  cozinhaBar : icone === 3 ? entrega : icone === 4 ? fecharconta : icone === 5 ? funcionario : administrativo } /> */}
        <View style={{height:30}} />
        <Text style={{color: 'white', fontSize: 15}}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  )
} 

