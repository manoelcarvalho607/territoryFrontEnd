import React, { useState, useEffect, useContext} from 'react';
import { View, TouchableOpacity, Text, Modal, SafeAreaView, StyleSheet, ScrollView, Dimensions, Alert, Image, TextInput } from 'react-native';
import { GlobalContext } from '../../../GlobalContext';
//import api from '../../../services/api';
import styles from './style';
import button80 from '../../../../assets/button80.png';
import Button from '../Button';
import Calendario from '../Calendario';

//icons
// import iconeOk from '../../../../assets/iconeOk.png'; 


export default function  PopupRequestMap({ titulo, acao}) {

    

    const [lista, setLista] = useState([]);

    const [contadorQuant, setContadorQuant] = useState(0);
    const { modalVisible, setModalVisible, perfilUser} = useContext(GlobalContext);
    


  
  

    // useEffect(() => {
    //     carregarDados();
    //   }, []);

    

    // function carregarDados() {

    //         getFormaDePagamento(perfilUsuario.idEmpresa)
    //            .then((item) => {
    //             setLista(item)
    //            })
    //            .catch((error) => {
    //              console.log(error)
    //            });


            // getListVenda()
            //    .then((vendaItem) => {
            //     setListaFormaPagamento(vendaItem)
            //    })
            //    .catch((error) => {
            //      console.log(error)
            //    });
        
     // }

    //   const url = api+"/vendaItem/salvar/2";

    //   function postPedido(pedidoParaAtualizar) {
    //              fetch(url, {
    //              method: "POST",
    //              body: JSON.stringify(pedidoParaAtualizar),
    //              headers: {"Content-type": "application/json"}
    //              })
    //              .then(response => response.json())
    //              .then((json) => {
    //                 console.log(json)
    //                 setNovaFormaPagamento('')
    //              })    
    //              .catch(err => console.log(err))
    //    }

    // function inserirNovaFormaPagamento(descricao) {
    //     console.log("forma de pagamento: " + descricao)
    //   //  setNovaFormaPagamento(descricao)
    //     setModalVisible(false)
    // }
       

    // function renderOption(item){
    //     return (
    //         <TouchableOpacity style={styles.box2} onPress={()=> inserirNovaFormaPagamento(item.descricao)}>
    //             <Text style={styles.txt3}>{item.descricao}</Text>
    //         </TouchableOpacity>
            
    //     )
    // }
       
    //    function atualizaPedido(){
            
    //         const atualizarFormaPagamento = listaFormaPagamento.find((item) => idNovoPedido === item.id)
    //         atualizarFormaPagamento.formaDePagamento = {...atualizarFormaPagamento.formaDePagamento, descricao:novaFormaPagamento}
    //         console.log({pedidoParaAtualizar: atualizarFormaPagamento})
    //         postPedido(atualizarFormaPagamento)

    //     }
             
     


     const  solicitarMap = () => {
             setModalVisible(false)
           //  atualizaPedido()
            }


    return (
        <TouchableOpacity onPress={acao}>
                <View style={styles.button}>
                   <Image source={button80} /> 
               </View>
                    <SafeAreaView style={{flex:1}}>
                            
                            <Modal   transparent visible={modalVisible} onRequestClose={()=> setModalVisible(false)} >
                                <SafeAreaView style={{flex:1, backgroundColor: 'rgba(0,0,0,0.10)'}}>
                                    <View style={styles.container} >
                                        
                                        <View style={styles.popup}>
                                            <View style={styles.menu}>
                                                <View style={styles.box1}>
                                                    <Text style={styles.titulo1}>ESCOLHA A DATA DE INÍCIO:</Text>
                                                </View>
                                                <View style={styles.box2}>
                                                    <Calendario/>
                                                </View>
                                                <View style={styles.box4} >
                                                   <Button acao={() => solicitarMap()} largura={280} altura={60} titulo={'SOLICITAR'} />
                                                </View>
                                            </View>
                                        </View>
                                        
                                    </View>
                                    
                                </SafeAreaView>
                                
                            </Modal>
                    
                    </SafeAreaView>

        </TouchableOpacity>

    )
    
}