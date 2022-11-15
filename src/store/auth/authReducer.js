import { LoadData, RomoveData, SaveData } from "../../localstore";

const tokenKey = LoadData("token")
const user=LoadData("user")
const authStatus={
    isAuth:tokenKey ? true : false,
    loading:false,
    token:tokenKey,
    user:user,
}

const authReducer=(status=authStatus,{type,payload})=>{
switch(type){
    case "LOGIN_SUCCESS":{
        // console.log("payload",payload)
      SaveData("token",payload.token)
      SaveData("user",payload.user)
        return{
            ...status,
            isAuth:true,
            loading:false,
            token:payload.token,
            user:payload.user
        }
    }
    case "LOGOUT_SUCCESS":{
        RomoveData("token")
        RomoveData("user")

          return{
              ...status,
              isAuth:false,
              loading:false,
              token:null,
              user:"",
          }
      }
    default:{
        return status;
    }
}
}  

export default authReducer;