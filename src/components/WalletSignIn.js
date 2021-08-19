import React from "react"
import { StyleSheet, Text, View,TouchableOpacity } from "react-native"

export default function WalletSignIn(props){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}
                onPress={()=>props.navigation.navigate('Dashboard')}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View>
                <Text>Sign Up</Text>
                <Text>Forgot Password?</Text>
            </View>
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