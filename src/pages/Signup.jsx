import React, { useState } from 'react'
import { Box, Button, Center, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { SignupAction } from '../store/auth/authAction'

const Signup = () => {
    const [show, setShow] = React.useState(false)
    const dispatch =useDispatch()
    const handleClick = () => setShow(!show)

    const [form , setForm]=useState({
        username:"",
        email:"",
        password:""
    })
    
    const handleSignup=()=>{
        if(!form.username || !form.email || !form.password){
            alert("Fill All Details")
        }
        else{
            dispatch(SignupAction(form))
        }
    }


  return (
    <Center >
        <InputGroup 
        borderRadius="10px" 
         size='md' 
        width={"70%"} 
        display={"flex"} 
        flexDirection={'column'} 
        gap="10px"
        boxShadow='md' p='6' rounded='md' bg='white'
        >
            <Input placeholder='Enter username'  value={form.username} onChange={(e)=>setForm({...form,username:e.target.value})}/>
            
            <Input placeholder='Enter Email'  value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
            
            <Box>

            <Input pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
            value={form.password}
            onChange={(e)=>setForm({...form,password:e.target.value})}
            />
            <InputRightElement width='4.5rem' m={"125px 20px 0px 0px "}>
                <Button h='1.75rem' size='sm' onClick={handleClick}>{show ? 'Hide' : 'Show'}</Button>
            </InputRightElement>

            </Box>

            <Button onClick={handleSignup}>Create Account</Button>

        </InputGroup>
    </Center>
)}

export default Signup
