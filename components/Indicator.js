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
        flex:0.3, 
        flexDirection:"row",
        justifyContent:"space-between"    
    },
    section1:{
        flex:0.2,
        backgroundColor:"#A8A8A8",
        borderRadius:50,
    },
    section2:{
        flex:0.2,
        backgroundColor:"#A8A8A8",
        borderRadius:50
    },
    section3:{
        flex:0.4,
        backgroundColor:"#5D3FD3",
        borderRadius:50

    }
})