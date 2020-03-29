import React, { useEffect , useState} from 'react';

import {Button} from 'react-native-elements';

import {useNavigation} from '@react-navigation/native';

import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';

import {Feather} from '@expo/vector-icons'

import styles from './styles';

export default function TaskList(){
    
    return(
        <View style={styles.container}>
            <Text>Testando Plataforma!!</Text>

            <TouchableOpacity style={styles.addButton}> 
            <Feather name="plus-circle" size={48} color="#A60000">

            </Feather>
            </TouchableOpacity>
        </View>

    );
}