import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, Text, Button} from 'react-native';
import styles from './styles';
import ActionButton from 'react-native-action-button';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements'

export default function TaskList() {

    function createTask() {

    }

    return (
        <View style={styles.container}>
           <FlatList
           data={[1,2,3]}
           renderItem={() =>(   
           
           <View style={styles.button}>
                <TouchableOpacity 
                 
                 onPress={()=> {}}>
                      <Text>
                          Text Novamente
                      </Text>
                      
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Feather name="trash" size={16} color="#E02041"></Feather>
                  </TouchableOpacity>
           </View>
            )}
           />
            
            <ActionButton buttonColor="rgba(231,76,60,1)" onPress={createTask}></ActionButton>
        </View>

        
    );
}