let initialState={
    data:[],
}
export const todoReduer=(state=initialState,{type,payload})=>{
    switch(type){
        case "GET_TODO":{
            if(payload.message){
                alert(payload.message)
            }
            else{
                // console.log("reducer",payload)
                return {...state,data:payload} ;
            }
            break;
        }
        case "ADD_TODO":{

            return{
                ...state,data:[...state.data,payload]
            }
        }
        case "UPDATE_TODO":{
            return{
                ...state,data:state.data.map((e)=>(
                    e._id === payload._id ? { ...e, todo: payload.todo,status:payload.status} : e
                ))
            }
        }
        case "DELETE_TODO":
            return {
                ...state, data:state.data.filter(todo => todo._id !==payload)
            };
        default:{
            return state;
        }
    }

}
