import React from "react"
import { Image, StyleSheet, Text,TouchableOpacity,View } from "react-native"

export default function PaymentSuccesfullScreen(){
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.header}>PAYMENT SUCCESSFUL</Text>
        </View>
        <View style={styles.subtextContainer}>
          <Text style={styles.subtext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../assets/payment.png")} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.indicator}>
          <Text style={styles.iconText}>Previous</Text>
          <Text>Indicator row</Text>
          <Text style={styles.iconText}>Skip</Text>
        </View>
      </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:10,
        justifyContent:"flex-start",
        marginHorizontal: 20,
        marginTop:60,
    },
    titleContainer:{
        flex:0.8,
        justifyContent:"flex-end",
        alignItems:"flex-start"
    },
    subtextContainer:{
        flex:1.5,
        justifyContent:"center",
        alignItems:"center"
    },
    imageContainer:{
        flex:3,
        justifyContent:"flex-start",
        alignItems:"center",
    },
    buttonContainer:{
        flex:0.9,
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        flex:0.65,
        width:180,
        backgroundColor:"#5D3FD3",
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    indicator:{
        flex:1,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    header:{
       fontSize:26,
       fontWeight:"bold" 
    },
    subtext:{
        color:"#888888",
        fontSize:18,
        textAlign:"justify"
    },
    image:{
        width:250,
        height:250,
        
    },
    buttonText:{
        fontSize:20,
        fontWeight:"bold",
        color:"#fff"
    },
    iconText:{
        color:"#C8C8C8",
        fontSize:16,
      
    }
    
})