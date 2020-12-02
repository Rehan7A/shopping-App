import React from 'react'
import {Text,FlatList,Button,View,StyleSheet} from 'react-native'

import ProductItem from '../../components/shop/productitem'
import {useSelector,useDispatch} from 'react-redux'
import Color from '../../constants/colors'
import ProductAction from '../../store/actions/product'
import {removeItemData} from '../../store/actions/cartaction'

const UserProduct=()=>{
    const cartItems = useSelector(state=>state.product.userproducts)
    const dispatch = useDispatch()

    
   
    const editItems =()=>{
        console.log("editItems")
    }
    const deleteItems =(id)=>{
      
       dispatch(ProductAction({type:'DELETE_PRODUCT'},id))
       dispatch(removeItemData({type:'REMOVE_CARTITEM'},id))
       
    }
    
    return (
       <FlatList data={cartItems} renderItem={({item})=>{
        const removeItems=()=>{
            const id = item.id
            deleteItems(id)
        }
    
           return(
                <ProductItem imageURL={item.imageURL} title={item.title} price={item.price}  >
                    <View style={styles.buttonView} ><Button title='edit' color={Color.primary} onPress={editItems} /></View>
                    <View style={styles.buttonView} ><Button title='delete'  color={Color.primary} onPress={removeItems} /></View>
                </ProductItem>
           )
       }} 
       keyExtractor={item=> item.id} />
    )
}



export default UserProduct

const styles = StyleSheet.create({
    buttonView:{
        width:80
    }
})