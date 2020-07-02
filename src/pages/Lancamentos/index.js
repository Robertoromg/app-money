import React, { useState } from "react";
import { Feather } from '@expo/vector-icons';
import { View, Picker, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./styles.js";

export default function Lancamentos() {
    const navigation = useNavigation();

    function navigationToMovimentos() {
        navigation.navigate('Movimentos');
    }

  const [selectedValue, setSelectedValue] = useState("pagamento");
  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Image  source={require('./../../assets/Logo.png')} />
            <Text style={styles.title}>Lançamentos</Text>
        </View>
        <View style={styles.bloco}>
            <View >
                <TextInput
                style={styles.input}
                placeholder="Histórico"
                autoCorrect={true}
                onChangeText={() => {}}
                />
            </View>
            
            <View>
                <TextInput
                style={styles.input}
                placeholder="Valor"
                autoCorrect={false}
                onChangeText={() => {}}
                />
            </View>

            <View style={styles.select}>
                <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150, color: '#d3d3d3' }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                <Picker.Item label="Energia" value="energia" />
                <Picker.Item label="Combustível" value="combustivel" />
                <Picker.Item label="Farmácia" value="farmacia" />
                <Picker.Item label="Faculdade" value="faculdade" />
                <Picker.Item label="Supermercado" value="mercado" />
                </Picker>
            </View>

            <View style={styles.select}>
                <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150, color: '#d3d3d3' }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                <Picker.Item label="Débito" value="debito" />
                <Picker.Item label="Crédito" value="credito" />
                </Picker>
            </View>

            <TouchableOpacity style={styles.btnSubmit} >
                    <Text style={styles.submitText}>Lançar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.detailsButton} onPress={navigationToMovimentos} >
                    <Text style={styles.detailsButtonText}>Extrato</Text>
                    <Feather name="arrow-right" size={21} color="#009933" />
            </TouchableOpacity>
        </View>
    </View>
  );
}
