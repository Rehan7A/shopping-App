import orderItem from '../../models/orderitem'
import {useSelector} from 'react-redux'

const initialstate ={
    order:[],
}

const Order= (state= initialstate,action)=>{
   
    if(action.type == 'ADD_TO_ORDER'){
       
     
     const cartItems = action.cartItems 
     const amount = action.amount
     
     const  date = new Date()
     const currentDate = date.toDateString()
     
     const timeSeconds =  date.getMilliseconds()
     const newItem = new orderItem(timeSeconds,cartItems,currentDate,amount)
         
     return {
         ...state,
         order:state.order.concat(newItem)
     }
    
    }
    return state
}

export default Order