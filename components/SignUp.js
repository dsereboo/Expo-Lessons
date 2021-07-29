import React from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function SignUp (){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Sign up</Text>
            <TextInput 
            placeholder="Username"
            style={styles.input}/>
            <TextInput
             style={styles.input}
             placeholder="Email"
            />
            <TextInput
             style={styles.input}
             placeholder="Password"
             secureTextEntry={true}
            />
             <TextInput
              style={styles.input}
             placeholder="Password again"
             secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
                <Text>You already have an account?</Text>
                <Text style={styles.login}>Log in</Text>
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        marginHorizontal:40,
        marginTop:70,
    },
    button:{
        backgroundColor:"#8f1ddb",
        borderRadius:10,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:20,
        marginTop:40,

    },
    buttonText:{
        color:"#fff",
        fontSize:18,
        fontWeight:"bold"
    },
    input:{
        borderBottomColor:"#8f1ddb",
        borderBottomWidth:2,
        marginTop:20,
        height:50,
    },
    title:{
        fontWeight:"bold",
        fontSize:36,
        color:"#8f1ddb",
        marginBottom:40,
    },
    loginContainer:{
        flexDirection:"row",
        justifyContent:"center",


    },
    login:{
        color:"#8f1ddb",
        marginLeft:10,
    }
})