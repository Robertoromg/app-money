import React, { useState } from "react";
import { View, Picker, Text, Image } from "react-native";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./styles.js";

export default function Lancamentos() {
  const [selectedValue, setSelectedValue] = useState("pagamento");
  return (
    <View style={styles.container}>

        <View>
            <Image  source={require('./../../assets/Logo.png')} />
            <Text style={styles.title}>Money in Box</Text>
        </View>

        <View>
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

        <View>
            <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="Energia" value="energia" />
            <Picker.Item label="Combustível" value="combustivel" />
            <Picker.Item label="Farmácia" value="farmacia" />
            <Picker.Item label="Faculdade" value="faculdade" />
            <Picker.Item label="Supermercado" value="mercado" />
            </Picker>
        </View>

        <View>
            <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="Débito" value="debito" />
            <Picker.Item label="Crédito" value="credito" />
            </Picker>
        </View>

        <TouchableOpacity style={styles.btnSubmit} >
                <Text style={styles.submitText}>Lançar</Text>
        </TouchableOpacity>
    </View>
  );
}
