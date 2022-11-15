import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { LoadData } from '../localstore'

const PrivateRoute = ({children}) => {
    const {isAuth}=useSelector((store)=>store.auth)
    const token = LoadData("token")
    // console.log("Private",isAuth)
    if(!token ||!isAuth){
      alert("Login Please")
    }
    return (
      <div>
          {token ||isAuth? 
          children
          :
          <Navigate to={"/user/login"} />
           } 
      </div>
    )
}

export default PrivateRoute
