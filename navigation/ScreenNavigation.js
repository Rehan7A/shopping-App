import React from 'react'
import {Text,StyleSheet,View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import ProductOverViewScreen from '../screens/shop/ProductOverViewScreen'
import Color from '../constants/colors'
import ProductDetail from '../screens/shop/ProductDetail'
import HeaderButton from '../components/shop/HeaderButon'
import CartScreen from '../screens/shop/CartScreen'
import OrderScreen from '../screens/shop/OrderScreen'
import {AntDesign,Feather,Fontisto,MaterialCommunityIcons} from '@expo/vector-icons'
import UserProduct from '../screens/user/UserProduct'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Header = {
    title:'All Products',
    headerStyle:{
        backgroundColor:Color.primary,
    },
    headerTintColor:'white',
    headerTitleStyle:{
        fontWeight:'bold',
        fontSize:20
    },
    
}

const Screen= props=>{
    const Products = ()=>{
        return <Stack.Navigator>
                <Stack.Screen name='ProductOverview' component={ProductOverViewScreen} options={ (props)=> {
                    return{
                        ...Header,
                        headerRight:()=> <HeaderButton {...props} />,
                        
                        
                    }
                } }/>
                <Stack.Screen name='ProductDetail' component={ProductDetail} options={ (props)=> {
                    return{
                        ...Header,
                        headerRight:()=> <HeaderButton {...props} />
                    }
                } } />
                <Stack.Screen name='CartScreen' component={CartScreen} options={{...Header}} />
            </Stack.Navigator>
    }
    const order = ()=>{
        return <Stack.Navigator>
                <Stack.Screen name='orders' component={OrderScreen} />
            </Stack.Navigator>
    }

    const Admin =()=>{
        return(
            <Stack.Navigator>
                <Stack.Screen name='userproductscreen' component={UserProduct} /> 
            </Stack.Navigator>
        )
    }

    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Products' component={Products} options={{
                    drawerIcon:()=> <AntDesign name='home' color='black' size={20} />,
                    drawerLabel:'Home',
                    
                }} />
                <Drawer.Screen name='orders' component={order} options={{
                    drawerIcon:()=> <Feather name="shopping-cart" size={20} color="black" />
                }} />
                <Drawer.Screen name='Admin' component={Admin} options={{
                    drawerIcon:()=> <MaterialCommunityIcons name='face-profile' size={24} color='black' />
                }} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}



export default Screen