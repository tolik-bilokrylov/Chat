import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../User';
import { Message } from '../Message';
import { MessageAnswer } from '../MessageAnswer';
import { MessageForm } from '../MessageForm';
import { FaUserCog } from 'react-icons/fa';
import { UserContext } from '../../context';
import { ChatContext } from '../../context';

import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

import './Chat.scss';

export function Chat() {
  const [modalUserActive, setModalUserActive] = useState(false);
  const [messages, setMessages] = useState([]);

  const cache = React.useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );

  const addMessage = (message) => {
    if (!message.text || /^\s*$/.test(message.text)) {
      return;
    };

    const newMessage = [...messages, message];

    setMessages(newMessage);
  };

  const [user, setUser] = useState({
    userName: '',
    userLastName: '',
  });
  const handlerUserName = (event) => setUser({ ...user, userName: event.target.value });
  const handlerUserLastName = (event) => setUser({ ...user, userLastName: event.target.value })

  const { chat } = useContext(ChatContext);



  return (
    <UserContext.Provider value={{ user, handlerUserName, handlerUserLastName }}>
      <div className="chat">
        <div className="chat__header">
          <h2 className="chat__title">
            {chat.chatName === '' ? 'Chat' : chat.chatName}
          </h2>
          <div className="chat__user">
            <FaUserCog
              onClick={() => setModalUserActive(true)}
              className='icon-style'
            />
            <span>{user.userName === '' ? 'User1' : user.userName}</span>
          </div>

          <Link
            to='/'
            className='chat__btn'
          >
            Logout
          </Link>
        </div>
        <div className="chat__input">
          <div style={{ width: "100%", height: "100vh" }}>
            <AutoSizer>
              {({ width, height }) => (
                <List
                  width={width}
                  height={height}
                  rowHeight={cache.current.rowHeight}
                  deferredMeasurementCache={cache.current}
                  rowCount={messages.length}
                  rowRenderer={({ key, index, style, parent }) => {
                    const message = messages[index];
                    return (
                      <CellMeasurer
                        key={key}
                        cache={cache.current}
                        parent={parent}
                        columnIndex={0}
                        rowIndex={index}
                      >
                        <div className="qwe" style={style}>
                          <Message
                            message={message}
                            key={message.id}
                          />
                          {Message
                            ? <MessageAnswer />
                            : null}
                        </div>
                      </CellMeasurer>
                    );
                  }}
                />
              )}
            </AutoSizer>
          </div>
          {/* {messages.map((message) => (
            <Message
              message={message}
              key={message.id} />
          ))} */}
        </div>
        <MessageForm onSubmit={addMessage} />
        <User
          modalUserActive={modalUserActive}
          setModalUserActive={setModalUserActive}
        />
      </div>
    </UserContext.Provider >
  )
}
