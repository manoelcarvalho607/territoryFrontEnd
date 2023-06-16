import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import styles from './style';

// import usuarioAdicionar from '../../../../assets/usuarioAdicionar.png';
// import usuarioConfirmar from '../../../../assets/usuarioConfirmar.png';
// import botaook from '../../../../assets/botaook.png';
// import voltar from '../../../../assets/voltar.png';
 import Button from '../Button';

import { Alert } from 'react-native';



export default function CardCenterInput({ titulo, dados, onPress, onAutentica, onRecuperar, onPressVoltar, onPressCadastrar,  onPhoneChange, onPasswordChange, tela, nameUser }){

  const [localPhone, setLocalPhone] = useState('');
  const [localPassword, setLocalPassword] = useState('');

  const handlePhoneChange = (newPhone) => {
    setLocalPhone(newPhone);
    onPhoneChange(newPhone)
      // if (typeof onTelefoneChange === 'function') {
      //     onTelefoneChange(novoTelefone);
      // }
  };

  const handlePasswordChange = (newPassword) => {
    setLocalPassword(newPassword);
    onPasswordChange(newPassword)
      // if (typeof onSenhaChange === 'function') {
      //     onSenhaChange(novaSenha);
      // }
    };


  return (
      <View style={styles.card}>
        

        {

          tela === 'senha' ?
            <View style={{width:'100%', alignItems:'center'}}>
              <Text style={styles.cardTitle}>{"Olá "+nameUser}</Text>
              <TextInput style={styles.input} secureTextEntry value={localPassword} onChangeText={handlePasswordChange} placeholder={dados}/>
              <View style={{height:65}} />
              <View style={{flexDirection:'row'}}>
                  {/* <Botao acao={onRecuperar} largura={150} altura={45} titulo={'RECUPERAR'}></Botao>
                  <View style={{width:20}} /> */}
                  <Button acao={onAutentica} largura={150} altura={45} titulo={'ACESSAR'}></Button>
              </View>
            </View>
        :
        <View />
        }


      </View>
  )
} 