import { StyleSheet } from 'react-native';

export default StyleSheet.create({
   background: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#32d9cb',
   },
   containerLogo: {
       flex: 1,
       justifyContent: 'center',
       marginLeft: 10
       
   },
   title: {
    color: '#009933',
    fontSize: 38,
    fontWeight: 'bold'
   },
   container: {
       alignItems: 'center',
       justifyContent: 'center',
       width: '90%'
   },
   cont: {
       width: '90%',
       alignItems: 'center',
       justifyContent: 'center',
   },
   input: {
       backgroundColor: '#fff',
       marginBottom: 15,
       color: '#222',
       fontSize: 17,
       borderRadius: 7,
       padding: 10,
       width: '90%'
   },
   btnSubmit: {
      backgroundColor: '#009933',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      paddingHorizontal: 96,
      width: '90%',
      marginBottom: 75
   },
   submitText: {
    color: '#fff',
    fontSize: 18
   }
   
});