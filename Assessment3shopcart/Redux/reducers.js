import { ADD_TO_CART } from "./actions";

const hreducer = (state = [],action)=>{
    switch(action.type){
        case ADD_TO_CART: return [...state,action.payload]
    default: return state
    
    }
}

export default hreducer;