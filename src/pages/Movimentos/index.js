import React, { } from "react";
import { Feather } from '@expo/vector-icons';
import { View, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./styles.js";


export default function Movimentos() {
        const navigation = useNavigation();

        function navigationToLancamentos() {
            navigation.navigate('Lancamentos');
        }

  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Image  source={require('./../../assets/Logo.png')} />
            <Text style={styles.title}>Extrato</Text>
        </View>
        <View style={styles.header}>
            <Text style={styles.title2}>Saldo R$</Text>
            <Text style={styles.title3}>30,00</Text>
        </View>
        <View style={styles.bloco}>
            
        </View>
        <TouchableOpacity style={styles.detailsButton} onPress={navigationToLancamentos} >    
                <Feather name="arrow-left" size={21} color="#009933" />
                <Text style={styles.detailsButtonText}>Voltar</Text> 
        </TouchableOpacity>
    </View>
    );
}