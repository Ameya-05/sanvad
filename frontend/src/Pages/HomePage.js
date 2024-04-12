import { Box, Container, Text, Tab, TabList, TabPanel, Tabs, TabPanels } from '@chakra-ui/react'
import Login from '../Components/Authentication/Login'
import SignUp from '../Components/Authentication/Signup'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const HomePage = () => {

  const history=useHistory();

    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem("userInfo"));

        if(user){
            history.push("/chats")
        }
    },[history]);

  return (
  <Container maxW='xl' centerContent>
      <Box 
        d="flex" 
        justifyContent="center" 
        p={3}
        bg={"white"} 
        w="100%" 
        m="40px 0 15px 0"
        borderRadius="lg" borderWidth="1px"    
      >
        <Text fontSize="3xl" fontFamily="work sans" color="black">Sanvada</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" color="black" borderWidth="1px">
      <Tabs variant='soft-rounded'>
      <TabList mb="1em">
        <Tab width="50%">Login</Tab>
        <Tab width="50%">Sign Up</Tab>
      </TabList>
        <TabPanels>
          <TabPanel><Login/></TabPanel>
          <TabPanel><SignUp/></TabPanel>
        </TabPanels>
      </Tabs>
      </Box>
    </Container>
  )
  
}

export default HomePage
