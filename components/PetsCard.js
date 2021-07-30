import React from "react"
import { View, Text, Image,StyleSheet } from "react-native"
import dog from "../assets/golden.jpg"
import { EvilIcons } from '@expo/vector-icons';

export default function PetsCard(){
    return(
        <View style={styles.cardContainer}>
            <Image style={styles.image} source={dog}/>
            <View style={styles.details}>
                <Text style={styles.name}>Name</Text>
                <Text>Animal</Text>
                <Text>Age</Text>
                <View style={styles.location}>
                    <EvilIcons name="location" size={22} color="black" />
                    <Text >Location</Text>
                </View>  
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    image:{
        width:170,
        height: 180,
        borderRadius:10,
        flex:0.6,
        zIndex:100,
       
    },
    cardContainer:{
        flexDirection:"row",
        marginHorizontal:30,
        backgroundColor:"#fff", 
        justifyContent:"flex-end" ,
        borderRadius:13,
    },
    name:{
        color:"#4d4dff",
        fontSize:20,
        fontWeight:"bold",
    },
    profileText:{
        marginTop:10,
    },
    details:{
        justifyContent:"center",
        alignItems:"flex-start",
        marginLeft:10,
        flex:0.4,
    },
    location:{
        flexDirection:"row",
    },
})