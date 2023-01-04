import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    status: {
        width:'100%',
        flexDirection: 'row',
        marginTop: -45,
        marginBottom: 25,
        padding:16,
        borderBottomWidth:2,
        borderBottomColor: '#1F1E25',
    },

    cCriados:{
        flexDirection: 'row',
        width: '50%'
    },
   
    cConcluidas:{
           flexDirection: 'row',
           width: '50%',
           justifyContent: 'flex-end',  
    },

    criadas: {
        color: '#4EA8DE',
        fontSize: 16,
    },

    qCriadas: {
        width:20,
        backgroundColor: '#333333',
        marginLeft: 5,
        borderRadius: 7,
        alignItems: 'center'
    },

    q1:{
        color: '#D9D9D9',
        fontSize: 16,
    },

    concluidas: {
        color: '#8284FA',
        fontSize: 16,
    },

    qConcluidas:{
        width:20,
        backgroundColor: '#333333',
        marginLeft: 5,
        borderRadius: 7,
        alignItems: 'center'
    },
    q2:{
        color: '#D9D9D9',
        fontSize: 16,
    },
    containerBarra:{
        flex: 1,
        height: '100%',
        backgroundColor: 'red',
    }
})