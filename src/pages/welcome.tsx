import React from 'react';
import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import x from '../assets/watering.png';



export function welcome(){
    return(
        <view>
            <text>
                bem vindo
        
            </text>
            
            <Image source={require('../assets/watering.png')} />


            <TouchableOpacity>
                <text>
                    
                </text>

            </TouchableOpacity>
        </view>


    )
}
