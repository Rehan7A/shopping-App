import React from 'react'
import {View,Text,Button,Image,StyleSheet,TouchableNativeFeedback} from 'react-native'
import Color from '../../constants/colors'

const ProductItem = props =>{
    
    
    return (
        <TouchableNativeFeedback useForeground onPress={props.onviewDetail} >
            <View style={{...styles.mainView}} >
                <Image source={{uri:props.imageURL}} style={{...styles.image}}/>
                    <Text style={{...styles.text}} > {props.title} </Text>
                    <Text style={{...styles.text}} >${props.price} </Text>
                    <View style={{...styles.buttonView}} >
                        {props.children}
                    </View> 
            </View>
          </TouchableNativeFeedback>
          )
}


const styles = StyleSheet.create({
    mainView:{
        height:220,
        marginVertical:15,
        marginHorizontal:20,
        borderRadius:4,
        elevation:3
    },
    image:{
        width:'100%',
        height:'60%',
        borderTopLeftRadius:4,
        borderTopRightRadius:4,
        overflow:'hidden'
    },
    buttonView:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
       
    },
    text:{
        textAlign:'center',
        fontWeight:'bold',
       
    },
   
    
})

export default ProductItem