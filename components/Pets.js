import React from "react"
import { StyleSheet, TextInput, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import PetsCard from "./PetsCard"

export default function Pets(){
    return(
        <View style={styles.container}>
            <View style={styles.searchContainer}>
            <AntDesign name="search1" size={20} color="black"  style={styles.searchIcon}/>
            <TextInput
                style={styles.searchbox}  
                placeholder="Search here"
            />
            </View>
           
            <PetsCard/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:10,
        marginTop:40,
        backgroundColor:"#F0F0F0",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,

    },
    searchbox:{
        height:40,
        backgroundColor:"#fff",
        
    },
    searchContainer:{
        
        marginHorizontal:30,
        marginTop:20,
        flexDirection:"row",
        alignItems:"center",
        borderRadius:20,
        backgroundColor:"#fff",
        borderTopEndRadius:15,
        borderBottomEndRadius:15,
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        marginBottom:25,
        
    },
    searchIcon:{
        paddingRight:10,
        paddingLeft:15,
    },
   
})