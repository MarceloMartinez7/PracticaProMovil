import {View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

function Gallos(props) {
    return (
        <View>
            <Image style={styles.gallo} source={props.imagen}/>
            <Text style={styles.titulo}>{props.nombre}</Text>
        </View>
    );
}

export default Gallos;
const styles = StyleSheet.create({
    gallo:{
        marginTop:10,
        borderRadius:8,
        width:300,
        height:300,
    },
    titulo:{
        fontSize:12,
        fontWeight: 'bold',
        color: 'blue',
    }
})