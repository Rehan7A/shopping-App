import React, { useEffect } from 'react'
import {FlatList,Text,StatusBar,Platform,StyleSheet,View,Image,Button} from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import Product from '../../models/products'
import ProductItem from '../../components/shop/productitem'
import CartAction from '../../store/actions/cartaction'
import { AntDesign } from '@expo/vector-icons'
import Color from '../../constants/colors'


const ProductOverViewScreen = props =>{
   
    const ProductList = useSelector(state=> state.product.availableproducts)
    const Cart = useSelector(state=> state.cart)
    const dispatch = useDispatch()

    useEffect(()=>{
        props.navigation.setOptions({
            headerLeft:()=> <AntDesign name='bars' size={26} color='white' style={styles.icon} onPress={()=>{
                props.navigation.toggleDrawer()
            }} />
        })
        
    })
    
    
    const Show =({item})=>{

            const detail =()=>{
            props.navigation.navigate('ProductDetail',{id:item.id})
            }
            const Add =()=>{
                dispatch(CartAction({type:'ADD_TO_CART',productId:item.id,price:item.price,quantity:1,title:item.title }))
             }
        return (
            <ProductItem imageURL={item.imageURL} title={item.title} price={item.price}  navigation={props.navigation} >
                <Button title='view details' color={Color.primary} onPress={detail} />
                <Button title='Add to  cart'  color={Color.primary} onPress={Add} />
            </ProductItem>
            )
    }
  
    return(
        <View style={{...styles.top}} >
            <FlatList data={ProductList} renderItem={Show} keyExtractor={item=> item.id} />
        </View>
    )
}

const styles = StyleSheet.create({
    top:{
        paddingTop: Platform.OS =="android" ? StatusBar.currentHeight : ''
    },
    icon:{
        marginLeft:10
    }
})

export default ProductOverViewScreen