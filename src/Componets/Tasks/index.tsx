import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../Tasks/styles";

type Props = {
    tarefa: string;
    onRemove: () => void;
    

}
export function Tasks({tarefa, onRemove}:Props){
    return(
        <View style={styles.container}>

            <Text style={styles.tarefa}>
                {tarefa}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                    <Text style={styles.buttonText}>
                        -
                    </Text>
            </TouchableOpacity>

        </View>
    )
}