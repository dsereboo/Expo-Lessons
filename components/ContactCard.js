import React from "react"
import { StyleSheet, Text,View,Image } from "react-native"
import image from "../assets/image.jpg"
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


export default function ContactCard(props){

    
    return(
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>

            <View style={styles.textContainer}>
                <Text style={styles.name} numberOfLines={1}>{props.name}</Text>
                <Text style={styles.number}>{props.number}</Text>
            </View>

            <View style={styles.phone}>
                <MaterialIcons name="local-phone" size={24} color="#009cf5" />
            </View>

            <View style={styles.icon}>
                <MaterialCommunityIcons name="message-processing" size={24} color="#009cf5" />
            </View>

            <View style={styles.icon}>
                <SimpleLineIcons name="options-vertical" size={24} color="#a8a8a8" />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        marginHorizontal:20,
        marginTop:50,
        alignItems:"center",
        marginVertical:0,
        
    },
    image:{
        width:60,
        height:60,
        borderRadius:50,
    },
    textContainer:{
        flex:4,
        flexDirection:"column",
        justifyContent:"center",
        marginLeft:18,
        marginRight:28,
    },
    icon:{
        flex:1,
    },
    phone:{
        marginLeft:25,
        marginRight:16
    },
    name:{
        fontSize:18,
        fontWeight:"bold",
    },
    number:{}




})