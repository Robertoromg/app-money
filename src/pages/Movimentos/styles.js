import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight +20,
        backgroundColor: '#32d9cb'
       },
       title: {
        fontSize: 45,
        color: '#009933',
        fontWeight: 'bold'
       },
       title2: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 180
       },
       title3: {
        fontSize: 25,
        color: '#009933',
        fontWeight: 'bold'
       },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bloco:{
        flex:1,
        alignItems: 'center',
        marginTop:45,
        backgroundColor: '#fff',
        borderRadius: 7,   
    },
    detailsButton: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 230,
        marginBottom: 15
    },

    detailsButtonText: {
        color: '#009933',
        fontSize: 20,
        fontWeight: 'bold'
    }

});