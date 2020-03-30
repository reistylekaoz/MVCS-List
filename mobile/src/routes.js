import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';

const AppStack = createStackNavigator();

import TaskList from './pages/TaskList';




export default function Routes(){
    return(
            <NavigationContainer >
                <AppStack.Navigator screenOptions={{headerShown:false}}>
                    <AppStack.Screen name="TaskList" options={{title: "Lista de tarefas"}} component={TaskList}/>                   
                  </AppStack.Navigator>
            </NavigationContainer>
    );
}