import React from "react"
import { FlatList, StyleSheet, TextInput, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import PetsCard from "./PetsCard"
import dog from "../assets/golden.jpg"
import dog2 from "../assets/unnamed.jpg"

export default function Pets(){

    const pets=[
        {image:`${dog}`, name:"Tucker", type:"dog", age:"3 years old", location:"No. 4 Lower Hill drive"},
        {image:`${dog2}`, name:"Buddy", type:"dog", age:"5 years old", location:"No. 4 Lower Hill drive"},  
    ]


    return(
        <View style={styles.container}>
            <View style={styles.searchContainer}>
            <AntDesign name="search1" size={20} color="black"  style={styles.searchIcon}/>
            <TextInput
                style={styles.searchbox}  
                placeholder="Search here"
            />
            </View>
            <FlatList
                data={pets}
                renderItem={({item})=>{
                    return<PetsCard image={item.image} name={item.name} type={item.name} age={item.age} location={item.location} />
                }}
                keyExtractor={(item)=>{item.name}}
            />
           
            {/* <PetsCard/> */}
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