import React from 'react'
import {StyleSheet,TouchableOpacity} from 'react-native'
import {AntDesign,FontAwesome}  from '@expo/vector-icons'

const HeaderButton = props =>{
    const cart = () => {
        props.navigation.navigate({"name":'CartScreen'})
    }
    return(
        <TouchableOpacity>
            <FontAwesome name="shopping-cart" size={26} color="white" style={styles.icon} onPress={cart} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    icon:{
        marginRight:20,
        opacity:0.9
    }
})
export default HeaderButton