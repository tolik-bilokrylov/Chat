import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatContext } from '../../context';

export function ChatOne() {
  const { chat } = useContext(ChatContext);
  let history = useHistory();

  return (
    <div
      className="x"
      onClick={() => history.push('/chat/:chatId')}
    >
      <h3 className="x">
        {chat.chatName}
      </h3>
      <p className="x">
        {chat.chatDiscription}
      </p>
    </div>
  )
};