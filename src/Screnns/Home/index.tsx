import {useState} from 'react';

import { View, 
         Image, 
         TouchableOpacity, 
         TextInput, 
         Alert, 
         FlatList,
         Text
        } 
from "react-native";

import { Status } from "../../Componets/Status";
import { Tasks } from '../../Componets/Tasks';
import { styles } from "./styles";

export function Home(){

    const [ participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('')
    
    function handleParticipantAdd(){
        
        setParticipants(prevState =>[...prevState, participantName]);
        setParticipantName('');
        
    }

    function handlerParticipantRemove(tarefa: string){
        
        Alert.alert('Remover', `Remover o participant ${tarefa}?` ,[
           {
                text: 'Sim',
                onPress: () => setParticipants(prevStat => prevStat.filter(participant => participant !== tarefa))
           },
           {
            text: 'Não',
            style: 'cancel'
           }
        ]);

    }

    return(
        <View style={styles.container}>


            <View style={styles.container2}>
                <Image
                    style={styles.logo}
                    source={require("../../../assets/Logo.png")}
                />
            </View>


            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Adicione uma nova tarefa!'
                    placeholderTextColor='#6B6B6B'
                    onChangeText={setParticipantName}
                    value={participantName}
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
                    <Image 
                        source={require("../../../assets/Layer2.png")}
                    />
                </TouchableOpacity>
            </View>

            <Status />

            <FlatList 
            data={participants}
            keyExtractor={item => item}
            renderItem={({item}) => (
                < Tasks
                tarefa={item}
                key={item}
                onRemove={ ( )  => handlerParticipantRemove ( item )}
                />
            )}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={() => (
                <View style={styles.containerLogo2}>
                <Image
                style={styles.logoSemTarefa}
                source={require('../../../assets/Clipboard.png')}
                />
                <Text style={styles.ListEmpatyComponet}>
                    Você ainda não tem tarefas cadastradas
                    Crie tarefas e organize seus itens a fazer
                </Text>
                </View>
            )}
            />

        </View>       
    
    )
}

