import React from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function MintsHomepage (){
    return (
      <View style={styles.container}>
        <View>
          <Text>Header row</Text>
        </View>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Welcome Back</Text>
          <Text style={styles.name}>Creative Mints</Text>
        </View>
        <View>
          <TextInput placeholder="Search" />
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
            <View>
                <Text>Branch services</Text>
            </View>
          </View>
          <View>
            <View style={styles.logoContainer2}>
                <AntDesign name="creditcard" size={24} color="#fff" />
            </View>
            <Text>Make a pyament</Text>
          </View>
          
        </View>
      </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:10,
        marginHorizontal:20,
    },
    topHeader:{},
    greetingContainer:{
        flex:1,
    },
    searchContainer:{},
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
    greeting:{
        fontSize:24,
        color:"#606060"
    },
    name:{
        fontSize:32,
    }
})