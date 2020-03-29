import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
container: {

    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    
    
},
button: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding: 10,
    borderRadius:8,
    backgroundColor: '#FFF',
    marginBottom:16,
}



});