import React from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"

export default function MintsHomepage (){
    return(
        <View style={styles.container}>
            <View>
                <Text>Header row</Text>
            </View>
            <View>
                <Text>Welcome Back</Text>
                <Text>Creative Mints</Text>
            </View>
            <View>
                <TextInput/>
            </View>
            <View>
                <Text>Action cards</Text>
            </View>
            <View>
                <Text>Choose a category</Text>
            </View>
            <View style={styles.categoryContainer}>
                <View style={styles.logoContainer1}>
                    <Text>Branch services</Text>
                </View>
                <View style={styles.logoContainer2}>
                    <Text>Make a payment</Text>
                </View>

            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{},
    topHeader:{},
    searchContainer:{},
    categoryContainer:{
        flexDirection:"row",
    },
    logoContainer1:{
        backgroundColor:"#00b33c",
        padding:12,
        borderRadius:50,
        marginRight:10,
    },
    logoContainer2:{
        backgroundColor:"#00b33c",
        padding:12,
        borderRadius:50,
        marginRight:10,
    },
})