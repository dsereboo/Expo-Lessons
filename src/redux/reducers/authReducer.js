const initialState={
    login:false,
    user:null,
    error:{},
}

export default function authReducer (state=initialState,action){
    switch(action.type){
        case "LOGGED IN":
            return{...state,login:true, user:action.payload};
        case "LOGGED OUT":
            return {...state,login:false, user:null};
        case "REGISTER_ERROR":
            return{...state, error:{register: action.payload}}
        case "LOGIN_ERROR":
            return{...state, error:{login: action.payload}}
        default:
            return state;
    }
}