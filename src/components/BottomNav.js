import React from "react"
import { StyleSheet, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function BottomNav (){
    return(
        <View style={styles.container}>
            <MaterialCommunityIcons style={[styles.icon, styles.home]} name="home-variant" size={26}  />
            <Ionicons style={styles.icon} name="ios-compass-sharp" size={26}  /> 
            <MaterialIcons style={styles.icon} name="insert-chart" size={26}  /> 
            <Ionicons style={styles.icon} name="settings-sharp" size={26}  />    
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        marginBottom:5,
        paddingTop:5,
       
    },
    icon:{
        flex:2.5,
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:25,
        color:"#D8D8D8"
    },
    home:{
        color:"#6a5acd"
    }
})