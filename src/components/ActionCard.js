import React from "react"
import { StyleSheet, View,Text } from "react-native"
import { AntDesign } from '@expo/vector-icons';

export default function ActionCard(){
    return(
        <View style={styles.card}>
        <View style={styles.iconBackground}>
            <AntDesign name="arrowup" size={24} color="black" />
        </View>
        <View style={styles.detail}>
            <Text style={styles.cardTitle}>Sent</Text>
            <Text style={styles.subText}>Sending payments to clients</Text>
        </View>
        <View style={styles.priceContainer}>
            <Text style={styles.price}>$150</Text>
        </View>  
    </View>
    )
}


const styles=StyleSheet.create({
    card:{
        flexDirection:"row",
        backgroundColor:"#fff",
        marginHorizontal:20,
        marginVertical:10,
        borderRadius:15,
        padding:15,
        shadowColor: "#000",
        shadowOffset: {
          width: 100,
          height: 100,
        },
        shadowOpacity: 0.2,
        shadowRadius: 100,
        justifyContent:"flex-start",
        alignItems:"center"
    },
    iconBackground:{
        flex:0.8,
        backgroundColor:"#e1ecf5",
        padding:12,
        borderRadius:12,
        marginRight:10,
       
    },
    cardTitle:{
        fontWeight:"bold",
        fontSize:16,
    },
    subText:{
        color:"#A8A8A8"
    },
    detail:{
        flex:5,
    },
    price:{
        
        fontWeight:"bold",
    },
    priceContainer:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
        // alignSelf:"flex-end",
       
    }
})