import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import styles from './style';

// import usuarioAdicionar from '../../../../assets/usuarioAdicionar.png';
// import usuarioConfirmar from '../../../../assets/usuarioConfirmar.png';
// import botaook from '../../../../assets/botaook.png';
// import voltar from '../../../../assets/voltar.png';
 import Botao from '../Botao';

import { Alert } from 'react-native';



export default function CardCenterInput({ titulo, dados, onPress, onAutentica, onRecuperar, onPressVoltar, onPressCadastrar,  onTelefoneChange, onSenhaChange, tela, nome }){

  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const handleTelefoneChange = (novoTelefone) => {
    setTelefone(novoTelefone);
    onTelefoneChange(novoTelefone)
      // if (typeof onTelefoneChange === 'function') {
      //     onTelefoneChange(novoTelefone);
      // }
  };

  const handleSenhaChange = (novaSenha) => {
    setSenha(novaSenha);
    onSenhaChange(novaSenha)
      // if (typeof onSenhaChange === 'function') {
      //     onSenhaChange(novaSenha);
      // }
    };


  return (
      <View style={styles.card}>
        

        {

          tela === 'senha' ?
            <View style={{width:'100%', alignItems:'center'}}>
              <Text style={styles.cardTitle}>{"Olá "+nome}</Text>
              <TextInput style={styles.input} secureTextEntry value={senha} onChangeText={handleSenhaChange} placeholder={dados}/>
              <View style={{height:65}} />
              <View style={{flexDirection:'row'}}>
                  {/* <Botao acao={onRecuperar} largura={150} altura={45} titulo={'RECUPERAR'}></Botao>
                  <View style={{width:20}} /> */}
                  <Botao acao={onAutentica} largura={150} altura={45} titulo={'ACESSAR'}></Botao>
              </View>
            </View>
        :
        <View />
        }


      </View>
  )
} 