import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import ContactCard from "./ContactCard"

export default function ContactList(props){

    const contacts=[
        {name:"Jane Doe", number:"089-890-209-1"},
        {name:"Jane Doe", number:"089-890-209-1"},
        {name:"Pops", number:"089-890-209-1"},
        {name:"Kwesi", number:"089-890-209-1"},
        {name:"Jane Doe", number:"089-890-209-1"},
        {name:"Jane Doe", number:"089-890-209-1"},
        {name:"Ama Mansa", number:"089-890-209-1"}
    ]


    return(
        <View style={styles.container}>
            <FlatList
            data={contacts}
            renderItem={({item})=>{
                return<ContactCard name={item.name} number={item.number}/>
            }}
            keyExtractor={(item)=>{item.number}}
            />
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        marginTop:40
    }
})