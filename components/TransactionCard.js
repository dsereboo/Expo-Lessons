import React from "react"
import { Image, StyleSheet,Text,View } from "react-native"
import image from "../assets/paypal.png"

export default function TransactionCard (){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>  
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Paypal</Text>
                <Text style={styles.date}>10 March</Text>
            </View> 
            <View style={styles.costContainer}>
                <Text style={styles.cost}>-$5.99</Text>
            </View>
               
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:10,
        flexDirection:"row", 
        alignItems:"center",
      
    },
    costContainer:{
        flex:1.2,
        alignItems:"flex-start",
    },
    detailsContainer:{
        flex:5,
        alignItems:"flex-start"
    },
    image:{
        flex:1.5,
        width:70,
        height:70,
        borderRadius:10, 
        marginRight:20,
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
    },
    date:{
        color:"#D8D8D8",
        fontSize:16,
    },
    cost:{
        fontSize:16,
        color:"red"
    }
})