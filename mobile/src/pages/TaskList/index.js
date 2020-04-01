import React, { useState, Component } from 'react';
import { View, TouchableOpacity, FlatList, Text, Button, TextInput, CheckBox, ScrollView, KeyboardAvoidingView, Platform, AsyncStorage, Modal } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import Note from '../../components/Detail/Note';

export default function TaskList() {

    const [noteText, setNoteText] = useState('');
    const [noteList, setNoteList] = useState([]);
    const [count, setCount] = useState(1);


    setValue = async (id, [lista]) => {
        try {
            await AsyncStorage.setItem(id.toString(), JSON.stringify(lista))
        } catch (e) {
            // saving error
        }
    }

    getValue = async () => {
        try {
            let value = await AsyncStorage.getAllKeys();

            const counter = value.length;

            const obj = [];

            let maxId = 0;


            for (var i = 0; i < counter; i++) {
                const idfor = value[i];
                const array = await AsyncStorage.getItem(idfor.toString());

                obj.push(JSON.parse(array));

                if (maxId < idfor) {
                    maxId = (parseInt(idfor));

                } else {

                };

            };

            setCount(maxId + 1);

            setNoteList(obj);







        } catch (e) {
            // read error
        }
    }

    removeValue = async (id) => {
        try {
            await AsyncStorage.removeItem(id.toString())
        } catch (e) {
            // remove error
        }

    }

    let notes = noteList.map((val, key) => {
        return <Note key={key} keyval={key} val={val} deleteMethod={() => deleteNote(key, val.id)} />
    });

    function addNote() {
        if (noteText) {
            var d = new Date();
            setCount(count + 1);
            var id = count;
            setNoteList([...noteList, { id: id, date: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(), note: noteText }]);
            setValue(id, [{ id: id, date: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(), note: noteText }]);
            setNoteText('');

        }
    };

    function deleteNote(key, id) {
        noteList.splice(key, 1);
        removeValue(id);
        setNoteList(noteList.filter(noteList => noteList.key !== key));

    };

    return (
        <Modal onShow={getValue}>
            <KeyboardAvoidingView
                behavior={Platform.select({
                    ios: 'padding',
                    android: null,
                })}
                style={styles.container}>
                <View style={styles.header}  >
                    <Text style={styles.textHeader}>Lista de Tarefas</Text>
                </View>
                <ScrollView
                    style={styles.listContainer}>

                    {notes}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput
                        onChangeText={setNoteText}
                        returnKeyType="send"
                        onSubmitEditing={addNote}
                        value={noteText}
                        placeholder="Insira a tarefa"
                        placeholderTextColor="white"
                        underlineColorAndroid="transparent"
                        style={styles.textInput}>
                    </TextInput>
                    <TouchableOpacity
                        onPress={addNote}
                        style={styles.addButton}>
                        <Feather name="plus" size={16} color="white" />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Modal>

    );
}