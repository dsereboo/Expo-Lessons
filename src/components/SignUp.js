import React,{useState} from "react"
import { StyleSheet,ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { connect } from "react-redux"
import  {registerError,createEmailAccount} from "../redux/actions/authActions"

function SignUp(props){

    const[details,setDetails]=useState({
        email:"",
        password:"",
        confirm:"",

    })

    const handleChange=(identity,text)=>{
        setDetails({...details, [identity]:text})
    }

    const handleSubmit=()=>{
        if(details.password!==details.confirm){
            props.registerError("Passwords do not match")
        }
        else{
            props.createEmailAccount(details.email, details.password)
        }
        
    }
    console.log(details)

    return(
        <View style={styles.container} >
            <Text style={styles.title}>Sign up</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
            {
                props.auth.error.register &&
                <Text style={styles.error}>{props.auth.error.register}</Text>
            }
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text)=>handleChange("email",text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text)=>handleChange("password",text)}
            />
             <TextInput
                style={styles.input}
                placeholder="Password again"
                secureTextEntry={true}
                onChangeText={(text)=>handleChange("confirm",text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
                <Text>You already have an account?</Text>
                <Text style={styles.login}>Log in</Text>
            </View>
            </ScrollView>
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
    },
    error:{
        color:"red"
    }
})

const mapStateToProps=(state)=>{
    return{auth:state}
}

const mapDispatchToProps={
    createEmailAccount:createEmailAccount,
    registerError:registerError,
  }

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)