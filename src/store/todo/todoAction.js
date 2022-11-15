import axios from "axios"
import { LoadData } from "../../localstore"


export const getTodo=()=>(dispatch)=>{
    let token = LoadData("token")
    fetch("https://mongobackend.onrender.com/todo",{
        method: 'GET',
        // body:JSON.stringify(form),
        headers:{
            "token": token,
            "content-type":"application/json; charset=UTF-8"
        }
    })
    .then((r)=> r.json()).then((r)=>{
        // console.log("r",r)
        dispatch({type:"GET_TODO",payload:r})
        
    })
    .catch((e)=>{
        console.log(e)
    })
    
    
}

export const AddTodo=(form)=>(dispatch)=>{
    let token = LoadData("token")
    fetch("https://mongobackend.onrender.com/todo",{
        method: 'POST',
        body:JSON.stringify(form),
        headers:{
            "token": token,
            "content-type":"application/json; charset=UTF-8"
        }
    })
    .then((r)=> r.json()).then((r)=>{
        alert("Todo Added")
        // console.log(r)
        dispatch({type:"ADD_TODO",payload:r})
    })
    .catch((e)=>{
        console.log(e)
    })
    
}

export const deleteTodo=(id)=>(dispatch)=>{
    axios.delete(`https://mongobackend.onrender.com/todo/${id}`)
    .then((r)=>{
        alert("Todo Deleted")
        dispatch({type:"DELETE_TODO",payload:id})

    })
}

export const UpdateTodo=(form)=>(dispatch)=>{
    // console.log(form)
    axios.patch(`https://mongobackend.onrender.com/todo/${form._id}`,form).then((r)=>{
        
    dispatch({type:"UPDATE_TODO",payload:form})

    })
}