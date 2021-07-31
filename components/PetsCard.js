import React from "react"
import { View, Text, Image,StyleSheet } from "react-native"
import dog from "../assets/golden.jpg"
import { EvilIcons } from '@expo/vector-icons';

export default function PetsCard(){
    return(
        <View style={styles.cardContainer}>
            <Image style={styles.image} source={dog}/>
            <View style={styles.details}>
                <Text style={styles.title}>Name</Text>
                <Text style={styles.detailText}>Dogo</Text>
                <Text style={styles.detailText}>3 years old</Text>
                <View style={styles.location}>
                    <EvilIcons style="icon" name="location" size={24} color="#D3D3D3" />
                    <Text numberOfLines={1} style={[styles.detailText, styles.locationText]}>No. 4 Lower Hill drive</Text>
                </View>  
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    image:{
        width:160,
        height: 170,
        borderRadius:10,
        flex:0.6,
        zIndex:100,
        position:"absolute",
        top:-15,
        bottom:15,
        right:100,
        left:0,
    },
    cardContainer:{
        flexDirection:"row",
        marginHorizontal:28,
        backgroundColor:"#fff", 
        justifyContent:"flex-end" ,
        borderRadius:13,
        marginVertical:30,   
    },
    title:{
        color:"#4d4dff",
        fontSize:20,
        fontWeight:"bold",
        marginTop:12,
    },
    profileText:{
        marginTop:10,
    },
    details:{
        justifyContent:"center",
        alignItems:"flex-start",
        flex:0.4,
        marginHorizontal:15,
    },
    location:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:-8,
        marginBottom:28,
        marginTop:15,
        flex:1,
    },
    detailText:{
        marginTop:5,
        fontSize:18,
        color:"#D3D3D3",   
    },
    icon:{
       flex:0.1,
    },
    locationText:{
        flex:0.9,
    }
})