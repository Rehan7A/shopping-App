import React, { useLayoutEffect } from 'react'
import {Button, Text, View,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import Colors from '../../constants/colors'
import {AntDesign} from '@expo/vector-icons'
import orderitem from '../../store/actions/order'

const CartScreen = props=>{
    
    let isEnabled;
    
    useLayoutEffect(()=>{
        props.navigation.setOptions({
            title: 'Cart Detail'
        })
        
    })
    const product = useSelector(state =>state.cart)
    
    
    if(product.totalAmount == 0){
        isEnabled = true
    }
    else{
        isEnabled = false
    }

    const transformedData = []
   
   
    for(const key in product.items){
        transformedData.push({
            id:product.items[key].id,
            quantity:product.items[key].quantity,
            amount:product.items[key].sum,
            title : product.items[key].title,
            price : product.items[key].price,
            
        })
    
    }
    
    const dispatch = useDispatch()
    
    
    const cartItems=({item})=>{
        const deleteItem = ()=>{
            dispatch({type:'DELETE_FROM_CART',id:item.id})        
        }
        return(
            <View style={styles.box} >
                <Text style={styles.text}> {item.quantity}  {item.title} </Text>
                <Text style={styles.text}>$ {item.amount.toFixed(2)} </Text>
                <TouchableOpacity onPress={deleteItem} ><AntDesign name="delete" size={24} color="black" /></TouchableOpacity>
            </View>
        )   
    }


    return (
        <View>
            <View style={styles.container} >
                <Text style={styles.text} >Total : $ {product.totalAmount.toFixed(2)} </Text>
                <View>
                    <Button title='order now' color={Colors.primary} disabled={isEnabled} onPress={()=>{
                       
                        dispatch(orderitem({type:'ADD_TO_ORDER',cartData:transformedData ,amount:product.totalAmount }))
                        
                    }} />
                </View>
            </View>
            <FlatList data={transformedData} renderItem={cartItems} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginVertical:10,
        width:'100%',
        height:60,
        borderColor:'black',
        elevation:4
    },
    text:{
        fontWeight:'bold'
    },
    box:{
        flexDirection:'row',
        justifyContent:'space-around',
        borderColor:'black',
        marginVertical:6,
        height:50,
        alignItems:'center',
        elevation:2,
        
    }
})

export default CartScreen