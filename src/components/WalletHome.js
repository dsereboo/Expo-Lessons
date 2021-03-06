import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ActionCard from "./ActionCard";

export default function WalletHome (){
    return (
        <View style={styles.container}>
            <View style={styles.idContainer}>
                <View style={styles.iconContainer}>
                    <FontAwesome5 style={styles.iconDrawer} name="grip-lines" size={24} color="#3B4990" />
                    <Entypo style={styles.iconOptions} name="dots-two-vertical" size={24} color="#3B4990" />
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require("../assets/image.jpg")} style={styles.image} />
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>Kwame Mensah</Text>
                    <Text style={styles.position}>Tech Lead</Text>
                </View>
                <View style={styles.moneyContainer}>
                    <View style={styles.amountContainer}>
                        <Text style={styles.amount}>$8900</Text>
                        <Text style={styles.label}>Income</Text>
                    </View>
                    <View style={styles.amountContainer}>
                        <Text style={styles.amount}>$5500</Text>
                        <Text style={styles.label}>Expenses</Text>
                    </View>
                    <View style={styles.amountContainer2}>
                        <Text style={styles.amount}>$890</Text>
                        <Text style={styles.label} >Loan</Text>
                    </View>
                </View>
            </View>
            <View style={styles.overviewLabel}>
                <Text style={styles.title}>Overview</Text>
                <FontAwesome name="bell-o" size={22} color="#303030" />
                <Text style={styles.date}>August 3,2021</Text>
            </View>
            <ActionCard/>
            <ActionCard/>
            <ActionCard/>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#e1edf7",
    },
    idContainer:{
        backgroundColor:"#fff",
        marginTop:40,
        borderRadius:20,
        marginHorizontal:15,
        shadowColor: "#000",
        shadowOffset: {
          width: 100,
          height: 100,
        },
        shadowOpacity: 0.2,
        shadowRadius: 100,
        paddingBottom:10,
    },
    iconContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:15,
        marginHorizontal:20,
    },
    nameContainer:{
        justifyContent:"center",
        alignItems:"center",
        marginBottom:10,
    },
    image:{
        width:80,
        height:80,
        borderRadius:50,
    },
    imageContainer:{
        justifyContent:"center",
        alignItems:"center",
        marginVertical:20,
    },
    name:{
        fontSize:20,
        fontWeight:"bold",
        color:"#3B4990",
    },
    position:{
        fontSize:14,
        color:"#A8A8A8"
    },
    moneyContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:20,
    },
    amountContainer:{
        paddingHorizontal:20,
        borderRightColor:"#E0E0E0",
        borderRightWidth:2,
    },
    amountContainer2:{
        paddingHorizontal:20,
    },
    amount:{
        color:"#3B4990",
        fontSize:18,
        fontWeight:"bold"
    },
    label:{
        textAlign:"center",
        color:"#A8A8A8",
        
    },
    overviewLabel:{
        flexDirection:"row",
        marginHorizontal:20,
        marginVertical:15,
        alignItems:"center"
    },
    title:{
        color:"#3B4990",
        fontWeight:"bold",
        fontSize:26,
        marginRight:10,
    },
    date:{
        marginLeft:90,
        color:"#3B4990",
        fontWeight:"bold",
    },


})