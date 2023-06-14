import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, Modal, SafeAreaView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styles from './style';
import {Calendar, LocaleConfig } from 'react-native-calendars';
import  config  from './config';

//icons
import iconCalendar2 from '../../../../assets/iconCalendar2.png'


LocaleConfig.locales['br'] = { 
    monthNames: [ 'Janeiro' , 'Fevereiro' , 'Março' , 'Abril' , 'Maio' , 'Junho' ,  'Julho' , 'Agosto' , 'Setembro' , 'Outubro' , 'Novembro','Dezembro' ] , 
    monthNamesShort: [ 'Jan.' ,  'Fev.' ,  'Mar' ,  'Abr' ,  'Maio' ,  'Jun' ,  'Jul.' ,  'Ago' ,  'Set.' ,  'Out.' ,  'Nov.' ,  'Dez.' ] ,
    today: "Hoje" ,
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
    dayNamesShort: [ 'Dom' ,  'Seg' ,  'Ter' ,  'Qua' ,  'Qui' ,  'Sex' ,  'Sab' ] , 
    
  }
 LocaleConfig.defaultLocale = "br"



export default function Calendario(){
    const [showModal, setshowModal] = useState(false);
    const [dataInicio, setDataInicio] = useState('');

    const test = () => {
        Alert.alert("teste")


    }

    function formatteDate(data){
        let inverter = data.split("");
        let i = inverter.reverse();
        let alinhado = [i[1],i[0],i[2],i[4],i[3],i[5],i[7],i[8],i[9],i[6]];
        let dataFormat = alinhado.join("");
        setDataInicio(dataFormat);
    }

   


    return (
        <View>
            <TouchableOpacity onPress={() => {setshowModal(true)}} style={styles.box}>
             <Image source={iconCalendar2} /> 
             <View style={styles.box1}>
                <Text style={styles.box2}>{dataInicio}</Text>
             </View>
            </TouchableOpacity>
                <Modal transparent visible={showModal}  visible={showModal} animationType="fade">
                    <SafeAreaView style={{flex:1} }>
                        <View style={styles.container}>
                            <Calendar style={styles.calendar}
                              onDayPress={date => {
                                console.log(date)
                                formatteDate(date.dateString)
                                setshowModal(false)
                              }}
                            />
                        </View>
                    </SafeAreaView>
                </Modal>
          

           

        </View>

    )

}