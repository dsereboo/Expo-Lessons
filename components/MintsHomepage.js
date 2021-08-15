import React from "react"
import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function MintsHomepage (){
    return (
      <View style={styles.container}>
        <View style={styles.topHeader}>
          <View style={styles.optionsContainer}>
            <FontAwesome5 name="grip-lines" size={24} color="#00308F" />
          </View>
          <View style={styles.imageContainer}>
            <FontAwesome name="bell-o" size={22} color="#00308F" />
            <Image style={styles.userImage} source={require("../assets/image.jpg")}/>
          </View>
        </View>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Welcome Back</Text>
          <Text style={styles.name}>Creative Mints</Text>
        </View>
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="black" />
          <TextInput style placeholder="Search" />
        </View>
        <View>
          <Text>Action cards</Text>
        </View>
        <View>
          <Text style={styles.categoryHeader}>Choose a category</Text>
        </View>
        <View style={styles.categoryContainer}>
          <View style={styles.branch}>
            <View style={styles.logoContainer1}>
              <FontAwesome name="bank" size={18} color="#fff" />
            </View>
            <View style={styles.branchText}>
                <Text>Branch services</Text>
            </View>
          </View>
          <View style={styles.branch}>
            <View style={styles.logoContainer2}>
                <AntDesign name="creditcard" size={18} color="#fff" />
            </View>
            <View>
                <Text>Make a payment</Text>
            </View>
            
          </View>
          
        </View>
      </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:10,
        marginHorizontal:20,
        marginTop:40,
    },
    topHeader:{
      flexDirection:"row",
      flex:0.5,
      alignItems:"center",
      justifyContent:"space-between"
    },
    greetingContainer:{
        flex:2,
    },
    searchContainer:{
        flex:0.5,
        flexDirection:"row",
        backgroundColor:"#F0F8FF",
        alignItems:"center",
        borderRadius:20,
        justifyContent:"flex-start"
    },
    categoryContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        flex:1,
        alignItems:"center"  
    },
    logoContainer1:{
        backgroundColor:"#66e0ff",
        padding:12,
        borderRadius:50,
        marginRight:10,
    },
    logoContainer2:{
        backgroundColor:"#0080ff",
        padding:12,
        borderRadius:50,
        marginRight:10,
    },
    optionsContainer:{
      backgroundColor:"#F0F8FF",
      padding:10,
      borderRadius:50,
    },
    userImage:{
      width:45,
      height:45, 
      borderRadius:50,
      marginLeft:20,
    },
    imageContainer:{
      flexDirection:"row",
      alignItems:"center"
    },
    categoryHeader:{
        fontSize:26,
        fontWeight:"bold",
    },
    branch:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderWidth:2,
        borderColor:"#f8f8f8",
        borderRadius:10,
        padding:5,
    },
    branchText:{
       flexDirection:"column"
    },
    greeting:{
        fontSize:24,
        color:"#606060"
    },
    name:{
        fontSize:32,
    }
})