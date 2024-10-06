import React from "react";
import { Text , View , FlatList, StyleSheet } from "react-native";

function UserCard(props){
    return(
        <View style={style.container}>
            <Text style={style.username}>{props.username}</Text>
            <View style={style.inner_container}>
                <Text>{props.name}</Text>
                <Text style={style.email}>{props.email}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#eceff1',
        marginVertical: 5 ,
        padding: 5
    },
    email:{
        fontSize:12,
        fontStyle: 'italic',
        color: 'gray',
        marginLeft:5,
    },
    username:{
        fontWeight:'bold'
    },
    inner_container:{
        flexDirection:'row',
        alignItems:'center'
    }

})

export default UserCard;
