import { useScrollToTop } from '@react-navigation/native';
import React, { useState, useContext, useEffect } from 'react';
import {Keyboard, View,  Image, Text, TouchableOpacity, Alert,} from 'react-native';
import { GlobalContext } from '../../../GlobalContext';
import styles from './style';
import PopupRequestMap from '../PopupRequestMap';
import botao from '../../../../assets/button80.png';

export default function FooterMenu({}){

    const[keyboardOpen, setKeyboardOpen] = useState(false);
    const { modalVisible, setModalVisible, perfilUsuario} = useContext(GlobalContext);

    const isKeyboardOpen = Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardOpen(true);
    });
  
    const isKeyboardClosed = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOpen(false);
    });

    function requestMap(){
      setModalVisible(true)
      
    //  Alert.alert("menu popup em desenvolve...")
    }

    return(
        <View>

        { keyboardOpen === false ? 
          (
           
                <View style={styles.container}>
                  <PopupRequestMap acao={() => requestMap()} />
                </View>
          ) : (<View></View>)
        }
        </View>
    )
}

