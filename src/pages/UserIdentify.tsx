
import React from 'react';
import {SafeAreaView, StyleSheet,Text,Image } from 'react-native';
import wateringImg from '../../assets/watering.png';



export function UserIdentify(){
    
    return(
      

        <SafeAreaView style={style.container}>
            <Image source={wateringImg} ></Image>
            <Text>
                olaa
            </Text>
        </SafeAreaView>    
        
    );        
    
    }


const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'

    }
});

