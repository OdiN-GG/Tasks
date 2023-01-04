import {View, Text} from 'react-native'
import {styles} from '../Status/styles'

export function Status(){
    return(
        <View style={styles.status}>

                <View style={styles.cCriados}>
                    <Text style={styles.criadas}>
                        Criadas
                    </Text>
                    <View style={styles.qCriadas}>
                        <Text style={styles.q1}>
                            0
                        </Text>
                    </View>
                    
                </View>

                <View style={styles.cConcluidas}>
                    <Text style={styles.concluidas}>
                        Concluidas
                    </Text>
                    <View style={styles.qConcluidas}>
                        <Text style={styles.q2}>
                            0
                        </Text>
                    </View>
                </View>
            </View>
            
    )
}