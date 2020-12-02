import {Products} from '../../data/dummy-data'
import CartItem from '../../models/cartitem'
import orderitem from '../actions/order'
const initialstate={
    items:{},
    totalAmount:0
}

const Cart = (state=initialstate,action)=>{
    if(action.type=='ADD_TO_CART'){
      const prodId = action.id
      const price = action.price
      const quantity = action.quantity
      const title = action.title
      

      if(state.items[prodId]){
        const updatedCart = new CartItem(
          prodId,price,
          state.items[prodId].quantity +1,
          title, 
          state.items[prodId].sum + price
        )
        return{
          ...state,
          items:{...state.items,[prodId]:updatedCart},
          totalAmount: state.totalAmount + price
        }
      }else{
        const newcartItem = new CartItem(prodId,price,quantity,title,price)
        return{
          ...state,
          items:{...state.items,[prodId]:newcartItem},
          totalAmount:state.totalAmount + price

        }
      }

    }

    else if(action.type ==='DELETE_FROM_CART'){
      const id = action.id
      const updatedValue= {...state} 
      const sum = updatedValue.items[id].sum 
      updatedValue.totalAmount = updatedValue.totalAmount - sum
      delete updatedValue.items[id]  
      state = updatedValue
      return state
    }
    else if(action.type=='ADD_TO_ORDER'){
     
     return {
       ...state,
       items:{},
       totalAmount:0
     }
    }

    else if(action.type=='REMOVE_CARTITEM'){
      var id = action.id
      var newItems = state.items
      try{
        var amount = newItems[id].sum
        delete newItems[id]
        return{
          ...state,
          items:newItems,
          totalAmount: state.totalAmount - amount
        }
      }
      catch{
        return{
          ...state
        }
      }
     

    }
    

    return state
} 

export default Cart