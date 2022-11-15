import { Button, Center, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import {MdOutlineAdd} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { AddTodo, getTodo } from '../../store/todo/todoAction'


const TodoInput = () => {
    const dispatch = useDispatch()
    const [form,setForm]=useState({
        todo:"",
        status:false,
    })
    const handleAddTodo=()=>{

        dispatch(AddTodo(form))

    }
    useEffect(()=>{
      // console.log("click")
      dispatch(getTodo())
    },[])
  return (
    <Center gap="10px">
        <Input width={"60%"}  placeholder='Enter Todo' value={form.todo} onChange={(e)=>setForm({...form,todo:e.target.value})}/>
        
        <Button colorScheme='teal' p="0px 10px" onClick={handleAddTodo}  ><MdOutlineAdd color='white' size={"47px"} /></Button>
    </Center>
  )
}

export default TodoInput
