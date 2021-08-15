import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';

export default function PiggyAction(){
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.iconContainer}>
            <FontAwesome5 name="piggy-bank" size={24} color="#ff4d4d" />
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
        backgroundColor:"#ff4d4d",
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