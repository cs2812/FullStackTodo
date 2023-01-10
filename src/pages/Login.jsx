import React, { useEffect, useState } from 'react'
import { Box, Button, Center, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LoginAction } from '../store/auth/authAction'
import { LoadData } from '../localstore'

const Login = () => {
    const token = LoadData("token")
    const dispatch = useDispatch()
    const navigate =useNavigate()
    // const {token} =useSelector((store)=>store.auth)
    const {isAuth} =useSelector((store)=>store.auth)

    // console.log("Login Auth",isAuth)
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const[form , setForm] =useState({
        email:"chetan@gmail.com",
        password:"chetan1234",
    })

    const handleSubmit=()=>{
        if(!form.email || !form.password){
            alert("Fill All Details")
        }
        else{
            dispatch(LoginAction(form))
        }
    }

    function checkToken(){
        if(isAuth || token){
        navigate("/")
        }
        
    }
    useEffect(()=>{
        checkToken()
    },[isAuth, token])

  return (
    <Center >

        <InputGroup 
        // border={"1px solid"} 
        borderRadius="10px" 
        // p="1rem"
         size='md' 
        width={"70%"} 
        display={"flex"} 
        flexDirection={'column'} 
        gap="10px"
        boxShadow='md' p='6' rounded='md' bg='white'
        >
            <Input placeholder='Enter email' value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
            <Box>
            <Input pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
            value={form.password}
            onChange={(e)=>setForm({...form,password:e.target.value})}
            />
            <InputRightElement width='4.5rem' m={"75px 30px 0px 0px "}>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
            </Box>
            <Center>
            <Button width={"30%"} onClick={handleSubmit}>Login</Button>
            </Center>
            <Text>OR</Text>
            <Text textAlign={"left"} ml="10px">If you don't have account</Text>
            <Button>
            <Link to={"/user/signup"}>Create Account</Link>
            </Button>
        </InputGroup>
    </Center>
  )
}

export default Login
