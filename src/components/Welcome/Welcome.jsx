import React, { useState, useContext } from 'react';
import { ModalChatCreate } from '../ModalChatCreate';
import { ChatOne } from '../ChatOne';
import { ChatContext } from '../../context';
import './Welcome.scss';

export function Welcome() {
  const [modalActive, setModalActive] = useState(false);
  const [chats, setChats] = useState([]);
  const { chat } = useContext(ChatContext);

  const addChat = () => {
    // eslint-disable-next-line no-mixed-operators
    if (!chat.chatName || /^\s*$/.test(chat.chatName) && !chat.chatDiscription || /^\s*$/.test(chat.chatDiscription)) {
      return;
    };

    const newChat = [chat, ...chats];

    setChats(newChat);
  };

  return (
    <div className="container">
      <button
        className="btn"
        type="button"
        onClick={() => setModalActive(true)}
      >
        Create a channel
      </button>
      <h1>Welcome to awesome chat</h1>
      <div className="x">
        {chats.map((chatOne) => (
          <ChatOne
            key={chat.id}
            chatOne={chatOne}
          />
        ))}
      </div>
      <ModalChatCreate
        onSubmit={addChat}
        active={modalActive}
        setActive={setModalActive}
      />
    </div>
  )
}

