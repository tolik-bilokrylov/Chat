
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { StartPage } from './pages/StartPage';
import { CreateChat } from './pages/CreateChat';
import { ChatPage } from './pages/ChatPage';
import { ChatContext } from './context';
// import { v4 as uuidv4 } from 'uuid';
import './App.scss';

function App() {
  const [chat, setChat] = useState({
    chatName: '',
    chatDiscription: '',
    id: '',
  });
  const handlerChatName = (value) => setChat(prevChat => ({ ...prevChat, chatName: value }));
  const handlerChatDiscription = (value) => setChat(prevChat => ({ ...prevChat, chatDiscription: value }));
  const handlerChatId = (valueId) => setChat(prevChat => ({ ...prevChat, id: valueId }));
  console.log(chat)
  return (
    <ChatContext.Provider value={{ chat, handlerChatName, handlerChatDiscription, handlerChatId }}>
      <Switch>
        <Route exact path={'/'} component={StartPage} />
        <Route exact path={'/welcome'} component={CreateChat} />
        <Route exact path={'/chat/:chatId'} component={ChatPage} />
      </Switch>
    </ChatContext.Provider>
  );
}

export default App;
