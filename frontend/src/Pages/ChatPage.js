import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../Components/Authentication/miscellenous/SideDrawer";
import MyChats from "../Components/Authentication/MyChats";
import ChatBox from "../Components/Authentication/ChatBox";
import { useState } from "react";

const ChatPage = () => {
  const {user}=ChatState()
  const [fetchAgain, setFetchAgain]=useState(false);

  return (
  <div style={{width:"100%"}}>
      {user && <SideDrawer/>}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && (
          <MyChats fetchAgain={fetchAgain} />
        )} 
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>
        )}
      </Box>
    </div>

  )
  
};

export default ChatPage
