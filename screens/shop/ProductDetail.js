import React, { useLayoutEffect, useState } from 'react'
import {View,Text,StyleSheet,ScrollView,Button,Image} from 'react-native'

import Color from '../../constants/colors'
import { useFonts} from '@expo-google-fonts/balsamiq-sans';
import {useDispatch,useSelector} from 'react-redux'
import CartScreen from '../../store/actions/cartaction'

let customFonts = {
    'BalsamiqSans_400Regular': require('../../assets/Fonts/BalsamiqSans-Regular.ttf')
  }

const ProductDetail= props=>{
    const {id} = props.route.params
    const product = useSelector(state=>state.product.availableproducts)
    const selectedProduct = product.find(prod=> prod.id === id)

    const Cart = useSelector(state=> state.cart)
    
    
    useLayoutEffect(()=>{
        props.navigation.setOptions({title:selectedProduct.title})
    })
    const dispatch = useDispatch()
    const addtocart=()=>{
        dispatch(CartScreen({ productId:selectedProduct.id, price:selectedProduct.price,quantity:1,title:selectedProduct.title }))
    }

    
    
    return(
        <ScrollView>
            <Image source={{uri:selectedProduct.imageURL}} style={styles.image} />
            <Text style={styles.text1} >{selectedProduct.title} </Text>
            <Text style={styles.text2} >${selectedProduct.price} </Text>
            <Text style={styles.description}> {selectedProduct.description} </Text>
            <View style={styles.button}>
                <Button title='To cart' color={Color.primary} onPress={addtocart} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image:{
        height:300,
        width:'100%'
    },
    text1:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:18
    },
    text2:{
        textAlign:'center',
        fontWeight:'900',
    },
    button:{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:10
    },
    description:{
        marginHorizontal:20,
        marginTop:10,
        
    }

})

export default ProductDetail