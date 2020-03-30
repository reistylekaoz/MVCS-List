import React, { useState, Component } from 'react';
import { View, TouchableOpacity, FlatList, Text, Button, TextInput, CheckBox, ScrollView } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';



export default class todoApp extends Component {
    render(){
        return(
                <View key={this.props.keyval} style={styles.note}>

                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Feather name="trash" size={16}></Feather>
                </TouchableOpacity>

                </View>
        );
    }

}