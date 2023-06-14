import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './style';


export default function Button({cor, titulo, acao, largura, altura }){

    return(
        <TouchableOpacity onPress={acao}>
            <View style={[styles.card,{width:largura, height: altura, backgroundColor: cor === 2 ? '#9598A9' : '#73614C'}]}>
            <Text style={{color: 'white', fontSize: 15}}>{titulo}</Text>
            </View>
        </TouchableOpacity>

    )
}