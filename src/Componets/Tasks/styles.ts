import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        flexDirection: "row",
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 15,   
        
        
    },

    tarefa:{
        flex: 1,
        fontSize: 16,
        color: "#FFF",
        marginLeft: 16,


    },

    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor:"#E24C44",
        alignItems: 'center',
        justifyContent: 'center',
     },

     buttonText:{
        color:'#FFF',
        fontSize: 24,
     },
})