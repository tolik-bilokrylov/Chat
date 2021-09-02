import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../User';
import { FaUserCog } from 'react-icons/fa';
import './Chat.scss';

export function Chat() {
  const [modalUserActive, setModalUserActive] = useState(false);
  const [value, setValue] = useState('');

  const makeNewMessag = (event) => {
    event.preventDefault();

    // if (value) {
    //   dispatch(addMessage({
    //     title: value,
    //     id: 234234,
    //     currentTime: `${new Date().toLocaleTimeString()}`,
    //   }));

    //   setValue('');
    // }
  };

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h2 className="title">Chat</h2>
        <FaUserCog
          onClick={() => setModalUserActive(true)}
          className='icon-style'
        />
        <Link
          to='/'
          className='chat__btn'
        >
          Logout
        </Link>
      </div>
      <div className="chat__input">

      </div>
      <form
        action=""
        className="chat__form"
        onSubmit={makeNewMessag}
        value={value}
      >
        <input
          className="chat__input--text"
          value={value}
          onChange={onChange}
        />
        <button
          className="chat__btn"
        >
          Send
        </button>
      </form>
      <User
        modalUserActive={modalUserActive}
        setModalUserActive={setModalUserActive}
      />
    </div>
  )
}
