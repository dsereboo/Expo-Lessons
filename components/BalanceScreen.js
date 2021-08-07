import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function BalaanceScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.balance}></View>
            <View style={styles.transactions}></View>

        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    balance:{
        flex:0.5,
        backgroundColor:"#0000ff",
    },
    transactions:{
        flex:0.5,
    },
})