import React, { useState, useEffect } from 'react';
import { Alert, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styles from './style';
import Button from '../Button';



export default function Login({titulo, dados, onCadastrar, onLogar, onPhoneChange, onPasswordChange}) {

    const [phoneLocal, setPhoneLocal] = useState('');
    const [password, setPassword] = useState('');
  
    const handlePhoneChange = (newPhone) => {
        setPhoneLocal(newPhone);
        onPhoneChange(newPhone)
        // if (typeof onTelefoneChange === 'function') {
        //     onTelefoneChange(novoTelefone);
        // }
    };
  
    const handlePasswordChange = (newPassword) => {
        setPassword(newPassword);
        onPasswordChange(newPassword)
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
                value={phoneLocal}
                onChangeText={handlePhoneChange}
                style={styles.input} placeholder={dados} />
            </View>
            <View style={{height:35}} />

            <View style={{flex:1, flexDirection:'row', overflow:'hidden'}}>
                <View style={{width:20}} />
                <Button acao={onLogar} largura={150} altura={45} titulo={'ACESSAR'} />
            </View>
    </View>

    )
}