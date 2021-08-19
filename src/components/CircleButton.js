import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';

export default function  CircleButton(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.CircleButton}>
          <AntDesign name="arrowright"  size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  CircleButton: {
    backgroundColor: "#FFC0CB",
    padding: 25,
    marginBottom: 50,
    // marginRight:20,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,

    elevation: 8,
  },
});