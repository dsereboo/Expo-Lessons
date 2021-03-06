import React from "react"
import { Image, StyleSheet, View,Text, TouchableOpacity, FlatList } from "react-native"
import TransactionCard from "./TransactionCard"
import { Ionicons } from '@expo/vector-icons';
import image from "../assets/image.jpg"
import BottomNav from "./BottomNav";
import paypal from "../assets/paypal.png"
import youtube from "../assets/black.jpg"
import twitch from "../assets/download.png"
import spotify from "../assets/spotify.jpg"

export default function  FinancesHome(){

    const data=[
        {logo:`${paypal}`, title:"Paypal", date:"10 March", cost:"-$5.99",},
        {logo:`${youtube}`, title:"Youtube", date:"12 April", cost:"-$35.00",},
        {logo:`${paypal}`, title:"Paypal", date:"15 June", cost:"-$2.99",},
        {logo:`${twitch}`, title:"Twitch", date:"20 September", cost:"-$4.99",},
        {logo:`${spotify}`, title:"Spotify", date:"1 December", cost:"-$5.00",},
    ]
    return (
        <View style={styles.container}>

            <View style={styles.idContainer}>
                <Image style={styles.image} source={image} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.welcome}>Welcome Back</Text>
                    <Text style={styles.name}>Kwame Mensa</Text>
                </View>
                <TouchableOpacity style={styles.costContainer}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.balanceContainer}>
                <Text style={styles.balanceTitle}>Your Balance</Text>
                <Text style={styles.balance}>$5435.40</Text>
            </View>

            <View style={styles.titleContainer}>
                <Text style={[styles.name, styles.transactionTitle]}>Last Transaction</Text>
                <Text style={[styles.balanceTitle, styles.more]}>See all</Text>
            </View>

            <FlatList
                data={data}
                renderItem={({item})=>{
                    return <TransactionCard data={item}/>
                }}
                keyExtractor={(item)=>{item.date}}
            />
            <BottomNav/>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:10,
        marginTop:50,
        marginHorizontal:25,  
    },
    idContainer:{
        flex:2,
        flexDirection:"row",
        alignItems:"center",
    },
    balanceContainer:{
        flex:2.3,
        backgroundColor:"#F8F8F8",
        borderRadius:15,
        marginVertical:20,
        paddingLeft:20,
        justifyContent:"center",
        alignItems:"flex-start",
        padding:15,
        
    },
    detailsContainer:{
        flex:5
    },
    costContainer:{
       flex:1,
    },
    titleContainer:{
        flex:0.7,
        flexDirection:"row",
        alignItems:"center",
        padding:5,
        marginBottom:10,
    },
    image:{
        flex:1.7,
        width:70,
        height:70,
        borderRadius:15,
        marginRight:10,
    },
    welcome:{
        color:"#6a5acd",
        fontSize:16,
        fontWeight:"bold"
    },
    name:{
        fontWeight:"bold",
        fontSize:16,
    },
    balance:{
        fontSize:28,
        fontWeight:"bold",
    },
    balanceTitle:{
        color:"#C0C0C0",
        fontSize:18
    },
    transactionTitle:{
        fontSize:20,
        flex:0.85,
    },
    more:{
        flex:0.15,
        fontSize:14,
    }
})