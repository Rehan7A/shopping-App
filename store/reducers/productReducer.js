import {Products} from '../../data/dummy-data'
const initialstate = {
    availableproducts: Products,
    userproducts : Products.filter(prod=>prod.ownerId === 'u1')
}

const productReducers =(state=initialstate,action)=>{
    switch(action.type) {
        case "DELETE_PRODUCT":
            const id = action.id
           
            const updatedUserItems = state.userproducts.filter(prod=> prod.id !== id )
            const updateAvailableproducts = state.availableproducts.filter(prod=>prod.id !== id)
            return{
                ...state,
                userproducts:updatedUserItems,
                availableproducts:updateAvailableproducts
            }
            
    }
    return state
}
export default productReducers