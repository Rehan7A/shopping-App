const CartAction = (data)=>{
    
    return{
        type:'ADD_TO_CART',
        id:data.productId,
        price:data.price,
        quantity:data.quantity,
        title:data.title
    }
}

const deletecartItem=(data)=>{
    return{
        type:'DELETE_FROM_CART',
        id:data.id
    }
}

const Cartorderaction =()=>{
    return{
        type:'ADD_ORDER'
    }
}
const removeItemData = (type,id)=>{
    return{
        type:'REMOVE_CARTITEM',
        id:id,
    }
}

export default CartAction
export {removeItemData}
