import React, { useState , Component} from 'react';
import { View, TouchableOpacity, FlatList, Text, Button, TextInput, CheckBox, ScrollView } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import Note from '../../components/Detail/Note';

export default function TaskList() {

   
    const [noteText, setNoteText] = useState('');
    const [noteList, setNoteList] = useState([]);

    
    let notes = noteList.map ((val, key) =>{
        return <Note key={key} keyval={key} val={val} deleteMethod={()=> deleteNote(key)}/>
    });

    function addNote(){
        if(noteText){
            var d = new Date();
            setNoteList([... noteList, {date: d.getDate()+"/"+(d.getMonth() + 1)+"/"+d.getFullYear(), note: noteText}]);
            setNoteText('');
            

        }
    };

    function deleteNote(key){
        noteList.splice(key, 1);
        setNoteList(noteList.filter(noteList => noteList.key !== key));
        
        
    };
    
    return (    
        <View style={styles.container}>
            <View style={styles.header}  >
                <Text style={styles.textHeader}>Lista de Tarefas</Text>
            </View>
            <ScrollView style={styles.listContainer}>
                            {notes}
            </ScrollView>
            <View style={styles.footer}>
                <TextInput
                onChangeText={setNoteText}
                
                value={noteText}
                placeholder="Insira a tarefa"
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
                style={styles.textInput}>
                

                </TextInput>
                
                <TouchableOpacity 
                onPress={addNote}
                style={styles.addButton}>
                    <Feather name="plus" size={16} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
    );
}