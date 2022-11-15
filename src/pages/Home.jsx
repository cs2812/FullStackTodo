import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Todo from './Todo'
import "../App.css"

const Home = () => {

  return (
    <Box className='todoHome'>
        <Text fontSize={"2xl"}></Text>
        <Todo/>
        
    </Box>
  )
}

export default Home
