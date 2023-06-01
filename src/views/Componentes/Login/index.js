import React, { useState, useEffect } from 'react';
import { Alert, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styles from './style';
import Botao from '../Botao';



export default function Login({titulo, dados, onCadastrar, onLogar, onTelefoneChange, onSenhaChange}) {

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
            <View>
                <Text style={styles.cardTitle}>{titulo}</Text>
            </View>
            <View style={{height:40}}/>
            <View style={{ alignItems:'center', width:'100%'}}>
                <TextInputMask
                type={'cel-phone'}
                options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) ', 
                }}
                returnKeyType="done"
                value={telefone}
                onChangeText={handleTelefoneChange}
                style={styles.input} placeholder={dados} />
            </View>
            <View style={{height:35}} />

            <View style={{flex:1, flexDirection:'row', overflow:'hidden'}}>
                <View style={{width:20}} />
                <Botao acao={onLogar} largura={150} altura={45} titulo={'ACESSAR'} />
            </View>
    </View>

    )
}