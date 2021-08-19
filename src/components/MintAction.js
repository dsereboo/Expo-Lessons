import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { Ionicons } from '@expo/vector-icons';

export default function MintAction(){
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.iconContainer}>
            <Ionicons name="ios-card" size={24} color="#3457D5" />
          </View>
          <Text style={[styles.whiteText]}>Transactions</Text>
          <Text style={[styles.whiteText]}>7 items</Text>
        </View>
      </View>
    );
}

const styles= StyleSheet.create({
    container:{
        width:150,
        height:150,
        backgroundColor:"#3457D5",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"flex-start",
        marginBottom:10,
        marginTop:10,
    },
    wrapper:{
        marginHorizontal:10,
    },
    iconContainer:{
        backgroundColor:"#fff",
        borderRadius:50,
        padding:12,
        alignSelf:"flex-start"
    },
    whiteText:{
        color:"#fff",
        opacity:0.8
    },
})