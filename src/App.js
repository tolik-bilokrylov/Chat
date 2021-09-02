
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { StartPage } from './pages/StartPage';
import { CreateChat } from './pages/CreateChat';
import { ChatPage } from './pages/ChatPage';
import './App.scss';

function App() {
  return (
    <>
      <Switch>
        <Route exact path={'/'} component={StartPage} />
        <Route exact path={'/welcome'} component={CreateChat} />
        <Route exact path={'/chat'} component={ChatPage} />
      </Switch>
    </>
  );
}

export default App;
