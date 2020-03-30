import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, Text, Button, TextInput, CheckBox } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function TaskList() {
    

    return (    
        <View style={styles.container}>
            <View style={styles.header}  >
                <Text style={styles.textHeader}>Lista de Tarefas</Text>
            </View>
            <ScrollView style={styles.listContainer}>

            </ScrollView>
            <View style={styles.footer}>
                <TextInput
                placeholder="Insira a tarefa"
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
                style={styles.textInput}>

                </TextInput>
                
                <TouchableOpacity style={styles.addButton}>
                    <Feather name="plus" size={16} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
    );
}