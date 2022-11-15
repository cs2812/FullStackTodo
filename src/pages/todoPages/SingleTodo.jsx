import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Check from '../../components/Check'
import { deleteTodo, UpdateTodo } from '../../store/todo/todoAction'
import {RiDeleteBinLine} from "react-icons/ri"
import {FiEdit} from "react-icons/fi"


const SingleTodo = ({ele}) => {

    const [edit,setEdit]=useState(false)
    const dispatch = useDispatch()

    const[editText, setEditText]=useState(ele)

    
    let handleDelete=(id)=>{
        // console.log(id)
        dispatch(deleteTodo(id))
    }
    let handleEdit=()=>{
        setEdit(pre=>!pre)
                
        dispatch(UpdateTodo(editText))
      }
  return (
    <Box  >
        <Flex width={"90%"} key={ele._id}  justifyContent={"space-between"} m="auto" mt="10px" bg="wheat" p="0.3rem 0.5rem" borderRadius={"8px"} >
          <Flex gap="20px">
            <Check ele={ele}/>
              <Text display={edit ? "none":""} fontFamily="cursive" mt="3px">{ele.todo}</Text>
              <Input display={edit?"":"none"} focusBorderColor='lime' bg="rgba(255,255,255,0.5)" value={editText.todo} onChange={(e)=>setEditText({...ele,todo:e.target.value})}/>
          </Flex>
          <Flex>
              <Button width="10px" height={"30px"} onClick={()=>handleEdit()} colorScheme='gray' variant='ghost' p="0px 10px"><FiEdit color='teal' size={"20px"}/></Button>

              <Button width="10px" height={"30px"} onClick={()=>handleDelete(ele._id)} colorScheme='gray' variant='ghost' p="0px 10px"><RiDeleteBinLine color="rgb(225, 80, 12)" size={"20px"}/></Button>
          </Flex>
          </Flex>
      
    </Box>
  )
}
export default SingleTodo
