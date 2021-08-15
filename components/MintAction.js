import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { Foundation } from '@expo/vector-icons';

export default function MintAction(){
    return(
        <View style={styles.container}>
            <View>
                <Foundation name="dollar" size={24} color="black" />
            </View>
            <Text>Transactions</Text>
            <Text>7 items</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{},
})