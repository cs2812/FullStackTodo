import { Checkbox } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { UpdateTodo } from '../store/todo/todoAction'

const Check = ({ele}) => {
    const [check,setCheck]=useState(ele.status)
   
    const dispatch=useDispatch()
    let handleUpdate=(status)=>{
        setCheck(!check)
        let newTodo={...ele,status:status}
    
        dispatch(UpdateTodo(newTodo))
      }
      useEffect(()=>{

      },[check])
  return (
    <>
          <Checkbox colorScheme='green' onChange={(e)=>handleUpdate(e.target.checked)} isChecked={check} borderColor={"teal"}/>

      
    </>
  )
}

export default Check
