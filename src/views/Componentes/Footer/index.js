import { useScrollToTop } from '@react-navigation/native';
import React, { useState } from 'react';
import {Keyboard, View,  Image, Text, TouchableOpacity, Alert,} from 'react-native';
import styles from './style';


export default function Footer({}){

    const[keyboardOpen, setKeyboardOpen] = useState(false);

    const isKeyboardOpen = Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardOpen(true);
    });
  
    const isKeyboardClosed = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOpen(false);
    });

    return(
        <View>

        { keyboardOpen === false ? 
          (
            <View style={styles.container}>
              <Text style={styles.text}>
                Jobe Soluções Em Sistemas
              </Text>
            </View>
          ) : (<View></View>)
        }
        </View>
    )
}

