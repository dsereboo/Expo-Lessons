import React from "react"
import { StyleSheet, Text, View,TouchableOpacity } from "react-native"
import {createStackNavigator ,createAppContainer} from "react-navigation";

export default function WalletSignIn(props){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}
                onPress={()=>props.navigation.navigate('WalletHome')}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1edf7",
    justifyContent:"center",
  },
  button: {
    justifyContent:"center",
    alignItems:"center",
    marginBottom:40,
    borderRadius:40,
    backgroundColor: "#3B4990",
    padding:20,
    marginHorizontal:10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});