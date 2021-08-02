import React from "react"
import { Image, StyleSheet,Text,View } from "react-native"
import image from "../assets/paypal.png"

export default function TransactionCard (props){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={props.data.logo}/>  
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{props.data.title}</Text>
                <Text style={styles.date}>{props.data.date}</Text>
            </View> 
            <View style={styles.costContainer}>
                <Text style={styles.cost} numberOfLines={1}>{props.data.cost}</Text>
            </View>
               
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:10,
        flexDirection:"row", 
        alignItems:"center",
        marginBottom:10,
      
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
        height:60,
        borderRadius:15, 
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