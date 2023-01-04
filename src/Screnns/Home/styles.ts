import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        flexDirection: "column",
        backgroundColor: '#0D0D0D', 
    },

    logo:{
        top: 70,
    },

    input:{
        flex: 1,
        height: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        padding: 16,
        color: '#FFF',
        fontSize:16,
        marginRight: 10,
    },

    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor:"#1E6F9F",
        alignItems: 'center',
        justifyContent: 'center'
     },

     buttonText:{
        color:'#FFF',
        fontSize: 24,
     },

     form:{
        width:'100%',
        flexDirection: 'row',
        marginTop: -45,
        marginBottom: 25,
        padding:16,
     },

     container2:{
        width:'100%',
        height:'25%',
        backgroundColor: 'black',
        alignItems: 'center',
    },

    ListEmpatyComponet:{
        color: '#FFF',
        fontSize: 12,
        textAlign: "center",
        padding: 50,
     },

     logoSemTarefa:{
        alignItems: 'center'
     },

     containerLogo2:{
        width:'100%',
        alignItems: 'center',
     }

})