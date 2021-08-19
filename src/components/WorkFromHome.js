import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import logo from "../assets/wfh.png"
import CircleButton from "./CircleButton"


const WorkFromHome =()=>{
    return (
      <View style={styles.mainContainer}>
        <View style={styles.skip}>
          <Text style={styles.skipText}>Skip</Text>
        </View>
        <Image source={logo} style={styles.image} />
        <View style={styles.detailContainer}>
          <Text style={styles.title}>Work from Home!</Text>
          <View>
            <Text style={styles.subtext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut 
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        {/* <CircleButton/> */}
      </View>
    );
}

const styles=StyleSheet.create({
    mainContainer:{
        flex:10,
        justifyContent:"center",
        marginHorizontal:10,
       
    },
    skip:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"flex-end",
        marginRight:20,
        
    },
    skipText:{
        fontSize:18,
        fontWeight:"bold",
        color:"#A8A8A8"

    },
   image:{
       width:350,
       height:350,
       marginTop:20,
       marginBottom:10,
       flex:5,
   },
   detailContainer:{
       flex:2, 
       alignItems:"center"    
   },
   title:{
       fontSize:28,
       fontWeight:"bold",
        marginBottom:10,
   },
   subtext:{
        fontSize:16,
        textAlign:"center",
        marginHorizontal:2,
        color:"#BEBEBE"
   },
   button:{
      flex: 1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#FFC0CB",
      marginBottom:40,
      borderRadius:40,
   },
   buttonText:{
       fontSize:18,
       color:"#fff",
       fontWeight:"bold"
   }
})

export default WorkFromHome