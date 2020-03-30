import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
note: {
    
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed",
    
},
noteText:{
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#E91E63",
},
noteDelete:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
    
}

});