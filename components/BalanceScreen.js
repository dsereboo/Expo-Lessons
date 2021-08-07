import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function BalaanceScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.balance}>
                <View style={styles.header}>
                    <Ionicons name="chevron-back" size={30} color="#fff" />
                    <Feather name="bell" size={24} color="#bf80ff" />
                </View>
                <View style={styles.details}>
                    <Text style={styles.title}>Your Balance</Text>
                    <Text style={styles.amount}>$547,000.00</Text>
                </View>
                <View style={styles.cardRow}>
                    <View style={styles.expense}>
                        <View>
                            <FontAwesome5 name="money-bill-wave" size={24} color="black" />
                        </View>
                        <View><Text>$5000</Text></View>
                        <View><Text>Expense</Text></View>
                    </View> 
                    <View style={styles.goals}>
                    <View>
                            <FontAwesome5 name="money-bill-wave" size={24} color="black" />
                        </View>
                        <View><Text>$5000</Text></View>
                        <View><Text>Expense</Text></View>
                    </View>
                </View>
            </View>
            <View style={styles.transactions}></View>

        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:10,
        justifyContent:"center",
        alignItems:"stretch"
    },
    balance:{
        flex:5,
        backgroundColor:"#4d4dff",
        
    },
    transactions:{
        flex:4,
        
    },
    header:{
        flex:1.8,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        // marginTop:40,
        marginHorizontal:20,
    },
    details:{
        flex:0.8,
        justifyContent:"flex-start",
        alignItems:"flex-start",
        marginHorizontal:30,
        marginBottom:20,
    },
    cardRow:{
        flex:3,
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginVertical:30,
    },
    title:{
        fontSize:24,
        color:"#bf80ff"
    },
    amount:{
        fontSize:32,
        color:"#fff",
    },
    expense:{
        flex:0.4,
        backgroundColor:"#89CFF0",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    goals:{
        flex:0.4,
        backgroundColor:"#ffdd99",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    }
})