import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadData, RomoveData } from '../localstore'
import { LogoutAction } from '../store/auth/authAction'
import {FaRegUserCircle} from "react-icons/fa"

const Navbar = () => {
  let {isAuth,user}= useSelector((store)=>store.auth)
  let token = LoadData("token")
  let dispatch = useDispatch()

  let handleLogout=()=>{
    RomoveData("token")
    dispatch(LogoutAction())
  }
  // console.log(token)
  return (
    <Box p="0.5rem" bg="rgb(7, 207, 153)">
      <Flex gap="10px" justifyContent={"center"}>

      <Link to={"/"}>
      <Button >Home</Button>
      </Link>

      {isAuth || token?
      <Link to={"/user/login"}>
        <Button onClick={handleLogout}>Logout</Button>
      </Link>
      :
      <Link to={"/user/login"}>
      <Button>Login</Button>
      </Link>
      } 
      <Link to={"/user/signup"}>
      <Button>Signup</Button>
      </Link>
      {user?
      <Flex><Text mt="10px"><FaRegUserCircle size={"20px"}/></Text><Text fontSize={"2xl"}>{user}</Text></Flex>
      :
      ""
      }
      </Flex>
    </Box>
  )
}

export default Navbar
