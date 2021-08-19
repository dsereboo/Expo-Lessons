import React,{ useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import {connect} from "react-redux"
import { loginEmailAccount } from "../redux/actions/authActions"


function LoginPage(props){

    const[details,setDetails]=useState({
        email:"",
        password:"",
    })

    const handleChange=(identity,text)=>{ 
        setDetails({...details, [identity]:text})
    }

    const handleSubmit=()=>{
      props.loginEmailAccount()
    }

    // console.log(details)

    return (
      <View style={styles.container}>
        <Text style={[styles.signUp, styles.title]} >Log In</Text>
        {
                props.auth.error.login &&
                <Text style={styles.error}>{props.auth.error.login}</Text>
          }
        <View>
          <TextInput
            placeholder="Email"
            style={styles.inputField}
            onChangeText={(text)=>handleChange("email",text)}
            value={details.email}
          />

          <TextInput
            placeholder="Password"
            autoCapitalize="none"
            style={[styles.inputField, styles.field2]}
            secureTextEntry={true}
            onChangeText={(text)=>{handleChange('password', text)}}
            value={details.password}
          />
           <Text style={styles.forgotPassword}>Forgot Password</Text>
        </View>

       

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text>Don't have an account?</Text>
          
          <Text style={styles.signUp} onPress={()=>{props.navigation.navigate("SignUp")}}>SignUp</Text>
        </View>
      </View>
    );
}

const styles=StyleSheet.create({
    container:{
      marginHorizontal:30,
      marginTop:80,  
    },

    button:{    
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#8f1ddb",
        height:50,
        borderRadius:10,
        marginTop:80,
        marginBottom:50,
    },

    buttonText:{
        fontSize:16,
        color:"#fff"
    },

    signUp:{
        color:"#8f1ddb",
        paddingLeft:7,
    },

    signUpContainer:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:30,
    },

    title:{
        fontSize:42,
        fontWeight:"bold",
        marginBottom:70,
    },

    inputField:{
        borderBottomColor:"#8f1ddb",
        borderBottomWidth:2,
        marginBottom:40,
        
    },

    forgotPassword:{
        marginTop:0,
        alignSelf:"flex-end",
        color:"#1a73e8",
    },

    field2:{
        marginBottom:20,
    },
    error:{
      color:"red"
  }


    


})

const mapDispatchToProps={
   loginEmailAccount: loginEmailAccount,
}

const mapStateToProps=(state)=>{
  return{auth:state}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)