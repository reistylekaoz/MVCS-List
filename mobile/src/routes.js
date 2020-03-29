import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';

const AppStack = createStackNavigator();

import TaskList from './pages/TaskList';
import Detail from './pages/Detail';


export default function Routes(){
    return(
            <NavigationContainer >
                <AppStack.Navigator screenOptions={{headerShown:true}}>
                    <AppStack.Screen name="TaskList" options={{title: "Lista de tarefas"}} component={TaskList}/>
                    <AppStack.Screen name="Detail" options={{title: "Tarefas"}} component={Detail}/>
                </AppStack.Navigator>
            </NavigationContainer>
    );
}