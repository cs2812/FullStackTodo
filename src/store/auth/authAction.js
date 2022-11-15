import axios from "axios"


export const SignupAction=(form)=>(dispatch)=>{
    
    // console.log(form)
    axios.post("https://mongobackend.onrender.com/user/signup",form)
    .then((r)=>{

        alert("SignUp Successful")

    })
    .catch((e)=>{
        alert("This Email is Used")
    })
    
}

export const LoginAction=(form)=>(dispatch)=>{
    // console.log("loginActin",form)
    // dispatch({type:"LOGIN_SUCCESS",payload:form})
    axios.post("https://mongobackend.onrender.com/user/login",form)
    .then((r)=>{
        console.log("res",r.data)
        if(r.data.message==="Logged in successfull"){
            alert(r.data.message)
            dispatch({type:"LOGIN_SUCCESS",payload:r.data})
        }
        else{
            alert("Fill Correct Email & Password")
        }
    })
    .catch((r)=>{
        alert("Fill Right Details")
        dispatch({type:"LOGOUT_SUCCESS"})
    })
}

export const LogoutAction=()=>(dispatch)=>{
dispatch({type:"LOGOUT_SUCCESS"})
}
