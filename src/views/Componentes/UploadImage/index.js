import React, { useState, useEffect, useContext } from 'react';
import { Image, TouchableOpacity, View, Text, Platform } from "react-native";
import { GlobalContext } from '../../../GlobalContext';
import * as ImagePicker from 'expo-image-picker';
import styles from './style';
import Button from '../Button';

const UploadImage = () => {
    //const [image, setImage] = useState(null);
    const {image, setImage} = useContext(GlobalContext);
    const pickImage = async () => {
    
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
       // setImage(result)
      }
    };
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={pickImage}>
            {image ?
                <Image style={styles.img} source={{uri: image}}></Image>
                :
                <View style={styles.box}>
                    <Text style={styles.text}>Clique aqui!</Text>
                    <Text style={styles.text}>para upload do mapa</Text>
                </View>
            }
        </TouchableOpacity>
        {/* <View style={styles.box1}>
            {image && <Image source={{ uri: image }} style={{ width: 300, height: 200 }} />}
        </View>
        <View style={styles.box2}>
            <Button titulo="Upload do mapa" acao={pickImage} largura={200} altura={40} />
        </View> */}
        
      </View>
    );

}

export default UploadImage;