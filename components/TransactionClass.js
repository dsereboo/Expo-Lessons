import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons';


export default function TransactionClass (){
    return(
        <View style={styles.container}>
           <View style={styles.logoContainer}>
                <FontAwesome name="car" size={24} color="#fff" />
            </View> 
           <View style={styles.textContainer}>
               <Text style={styles.header}>Car Purchase</Text>
               <Text style={styles.label}>Auto Loan</Text>
           </View>
           <View style={styles.priceContainer}>
               <Text style={styles.price}>-$250</Text>
           </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        marginHorizontal:30,
        alignItems:"center",
        justifyContent:"space-between"
        
    },
    logoContainer:{
        backgroundColor:"#00b33c",
        padding:15,
        borderRadius:50,
        marginRight:10,
    },
    header:{
        fontSize:16,
        fontWeight:"bold"
    },
    label:{
        color:"#A8A8A8",
        fontSize:14,
    },
    price:{
        fontWeight:"bold",
        fontSize:16,
    },
    textContainer:{
        marginLeft:-80,
    },
    priceContainer:{
        alignSelf:"center"
    }
})