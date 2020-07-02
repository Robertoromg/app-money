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
        marginTop:70
    },
    input: {
        width: 310,
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 7,
        marginTop: 5
    },
    select: {
        width: 310,
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 7,
        marginTop: 5,
    },
    btnSubmit: {
        width: 310,
        height: 45,
        backgroundColor: '#009933',
        borderRadius: 7,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitText: {
        color: '#fff',
        fontSize: 18
    },

    detailsButton: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 230
    },

    detailsButtonText: {
        color: '#009933',
        fontSize: 20,
        fontWeight: 'bold'
    }
});