import { Add_User, is_Login, Login, Remove_User } from "./action"

export const ReducerK = ( store = {user:{},allusers:[], isLogin:false}, action)=>{
   
    switch (action.type) {
        case Add_User:
            return(
                {...store,
             
                allusers : [...store.allusers, action.payload]}
            ) 
        case is_Login:
            return({
                ...store,
                isLogin: action.payload
            })
        case Login:
            return({
                ...store,
                user: {...action.payload}
            })
        
            
    
        default:
            return store;
    }
}