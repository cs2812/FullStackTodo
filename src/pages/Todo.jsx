import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import TodoInput from './todoPages/TodoInput'
import TodoList from './todoPages/TodoList'

const Todo = () => {
  
  return (
    <Box >
      <Text fontSize={"5xl"} fontFamily="cursive">Todo App</Text>
      <Box mt="20px">
      <TodoInput/>
      <TodoList />
      </Box>
    </Box>
  )
}

export default Todo

/*
font-family: 'Baloo 2', cursive;
font-family: 'Poppins', sans-serif;
*/