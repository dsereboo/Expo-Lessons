import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function Inidactor(){
    return(
        <View style={styles.container}>
            <View style={styles.section1}><Text></Text></View>
            <View style={styles.section3}></View>
            <View style={styles.section2}></View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:0.4,
        flexDirection:"row",
        justifyContent:"center"    
    },
    section1:{
        backgroundColor:"#A8A8A8",
        borderRadius:50,
        padding:5,
        marginRight:2,
    },
    section2:{
        backgroundColor:"#A8A8A8",
        borderRadius:20,
        padding:5,
        marginLeft:2,
    },
    section3:{
        backgroundColor:"#5D3FD3",
        borderRadius:20,
        padding:5,
  
    }
})