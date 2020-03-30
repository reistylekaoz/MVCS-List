import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
container: {
    
    flex: 1,
    
},

header:{
    backgroundColor: "#8306EC",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#FFF",
    height: 75,
    marginTop: 30,
},
textHeader: {
    color: "white",
    fontSize: 20,
    padding: 20,

},
listContainer:{
    flex: 1,
    marginBottom:100,

},
footer:{
    position: 'absolute',
    alignItems:'center',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#C4C4C4'

},
addButton:{
    backgroundColor: '#8306EC',
    width:85,
    height:85,
    borderRadius: 50,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: 'center',
    elevation: 10,
    marginBottom: 0,
    zIndex: 10,

},
textInput:{
    fontSize: 20,
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#C4C4C4',
    borderTopWidth: 2,
    width: '75%',
    
    borderTopColor: '#ededed'
},


});