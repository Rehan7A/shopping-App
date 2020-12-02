const orderitem =(data)=>{
    return {
        type:'ADD_TO_ORDER',
        cartItems:data.cartData,
        amount: data.amount
    }
}

export default orderitem