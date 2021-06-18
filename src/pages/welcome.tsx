import React from 'react';
import { Image,Text, TouchableOpacity, SafeAreaView,StyleSheet, Dimensions } from 'react-native';
import wateringImg from '../../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Feather} from '@expo/vector-icons'


export function Welcome() {
    return (
        <>
        <SafeAreaView style ={style.container}
> 
            
            <Text style={style.tittle}>
                Gerencie {'\n'}
                 suas plantas {'\n'}
                 de forma facil
            </Text>

            <Image source={wateringImg}></Image>

            <Text style={style.subtitle}>
                Não esqueça mais de regar suas plantas. {'\n'}
                Nós cuidamos de lembrar voce sempre que {'\n'} 
                precisar.

            </Text>
            <TouchableOpacity style={style.button}
                              activeOpacity={0.7}>
                            
                <Feather
                    name="chevron-right"
                    style={style.buttonIcon}
                />
                
            </TouchableOpacity>

            </SafeAreaView>
        </>

    )};

    const style = StyleSheet.create({
        container:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around'
        },

        tittle:{
            fontSize:32,
            fontWeight:'bold',
            textAlign:'center',
            color:colors.heading,
            lineHeight:38
        },

        subtitle:{
            textAlign:'center',
            fontSize:16,
            paddingHorizontal:20,
            color: colors.heading,
            fontFamily:fonts.text
        },

        image:{
            height: Dimensions.get('window').width * 0.7
        },
        
        
        button:{
            backgroundColor:colors.green,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:16,
            marginBottom:10,
            height:56,
            width:56

            
        },

        buttonIcon:{
            fontSize:32,
            color:colors.white
        }
    });