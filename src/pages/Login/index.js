import React, {useState, useEffect} from 'react';
import {View, Text,  Image, KeyboardAvoidingView, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles.js';
import api from '../../Services/api';



export default function Login() {
    const [validarLogin, setLogin] = useState();

    const navigation = useNavigation();

    function navigationToLancamentos() {
        navigation.navigate('Lancamentos');
    }

    async function loadLogin() {
        const response = await api.get('');
    
        setLogin(response.data);
    }


    const [offset] = useState(new Animated.ValueXY({x: 0, y:80}))
    const [opacity] = useState(new Animated.Value(0))

    useEffect(() => {
        loadLogin();
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue:0,
                spped: 4,
                bounciness: 30
            }),
            Animated.timing(opacity, {
                toValue:1,
                duration: 500,
            })
        ]).start();
        
    })

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Image  source={require('./../../assets/Logo.png')} />
                <Text style={styles.title}>Money in Box</Text>
            </View>
            <Animated.View style={[
                styles.cont, {
                    opacity: opacity,
                    transform: [
                        {translateY: offset.y }
                    ]    
                }
                ]}>
                <View style={styles.container}>
                    <TextInput style={styles.input} placeholder="Email" autoCorrect={false} onChangeText={(value) => this.validarLogin({})} />
                </View>

                <View style={styles.container}>
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} autoCorrect={false} onChangeText={(value) => this.validarLogin({})} />
                </View>

                <TouchableOpacity style={styles.btnSubmit} onPress={navigationToLancamentos} >
                    <Text style={styles.submitText}>Acessar</Text>
                </TouchableOpacity>

            </Animated.View>
            
        </KeyboardAvoidingView>
    )
}
