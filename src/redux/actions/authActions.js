import firebase from "../../firebase/firebase"

export const createEmailAccount=(email,password)=>{
    return async(dispatch)=>{
        try {
            //Access auth object of firebase which has the function to create a user
            const user =await firebase.auth().createUserWithEmailAndPassword(email, password)
            dispatch(loggedIn(user))
            console.log(user)
        } catch (error) {
            dispatch(registerError(error.message))
        }
    }
}

export const loginEmailAccount=(email,password)=>{
    return async(dispatch)=>{
        try {
            //Access auth object of firebase which has the function to create a user
            const user =await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log(user)
            dispatch(loggedIn(user))
        } catch (error) {
            // console.log(error)
            dispatch(registerError(error.message))
        }
    }
}

export const logout=()=>{
    return(dispatch)=>{
        //Access auth object of firebase which has the function to create a user
        firebase.auth().signOut()
        dispatch(loggedOut())
        .then(
            (response)=>{console.log(response)}
        )
        .catch(
            (error)=>{console.log(error)}
        )

    }
}

function loggedIn(user){
    return{
        type:"LOGGED IN",
        payload:user,
    }
}

function loggedOut(){
    return{ 
        type:"LOGGED OUT"
    }
}


export function registerError(error){
    return{
        type:"REGISTER_ERROR",
        payload:error,
    }
}