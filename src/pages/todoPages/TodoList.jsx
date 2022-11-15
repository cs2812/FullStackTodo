import { Box, Center, } from '@chakra-ui/react'
import React from 'react'
import {  useSelector } from 'react-redux'
import SingleTodo from './SingleTodo'

const TodoList = () => {
  const {data} = useSelector((store)=>store.todo)
  

  if(data.length){

    return (
      <Center mt="20px">
          <Box width={"63.5%"} bg="rgba(255,255,255,0.5)" p="0.5rem 0rem" borderRadius={"8px"} >
          {data && data.map((ele)=>{
            return(<SingleTodo ele={ele} key={ele._id}/>)
          })}
          </Box>
      </Center>
    )
  }
  else{
    return <div></div>
  }
}
export default TodoList ;
