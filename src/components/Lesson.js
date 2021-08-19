import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,ScrollView,FlatList } from 'react-native';

export default function Lesson() {

  const handleChange=(email)=>{
    setText({email})
    
  }
  const[text, setText]=useState({
    email:"",
    password:"",
    names:["Ama","Mansa","Kwame","Ama","Mansa","Kwame","Ama","Mansa","Kwame","Ama","Mansa","Kwame","Ama","Mansa","Kwame","Ama","Mansa","Kwame","Ama","Mansa","Kwame","Ama","Mansa","Kwame","Ama","Mansa","Kwame","Ama","Mansa","Kwame","Ama","Mansa","Kwame","Ama","Mansa","Kwame","Ama","Mansa","Kwame","Ama","Mansa","Kwame","Ama","Mansa","Kwame","Ama","Mansa","Kwame","Ama","Mansa","Kwame","Ama","Mansa","Kwame","Ama","Mansa","Kwame"]

  })

  console.log(text)

  return (
    <View style={styles.container}>
      <FlatList 
        data={text.names} 
        renderItem={({item})=>{
          return <Text>{item}</Text>}
        } 
        keyExtractor={(item, index)=>index}
      />

      {/* <TextInput
        style={styles.input}
        placeholder="email"
        autoCapitalize="none"
        autoCorrect={true}
        value={text.email}
        secureTextEntry={false}
        onChangeText={handleChange}
      />

      <TextInput
        style={styles.input}
        placeholder="password"
        autoCapitalize="none"
        autoCorrect={false}
        value={text.password}
        secureTextEntry={true}
        onChangeText={handleChange}
      />

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} >Login</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop:100,
  
  },

  input:{
    backgroundColor:"yellow",
    height:60,
    marginHorizontal:10,
    marginBottom:10,
  },

  buttonContainer:{
    backgroundColor:"#1F75FE",
    padding:20,
    height:35,
    borderRadius:10,
    marginHorizontal:20,
    justifyContent:"center",
    alignItems:"center"
  },

  buttonText:{
    color:"#fff",
    fontSize:16,
   
  }
});
