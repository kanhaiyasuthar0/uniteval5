export const Add_User = "ADD_USER";
;
export const is_Login = "IS_LOGIN";
export const Login = "LOGIN";


export const addUser = (payload)=>({
    type: Add_User,
    payload
})

export const islogin = (payload)=>({
    type: is_Login,
    payload
})
export const login = (payload)=>({
    type: Login,
    payload
})
