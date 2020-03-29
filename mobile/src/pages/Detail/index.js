import React from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';

import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

import { Feather } from '@expo/vector-icons'

import styles from './styles';

import * as MailComposer from 'expo-mail-composer';

import {Linking} from 'react-native';


export default function Detail() {



    return (
        <View style={styles.container}>
            
            <Text>Teste!</Text>
        </View>

    );
}