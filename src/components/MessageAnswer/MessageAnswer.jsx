import React, { useContext } from 'react';
import { UserContext } from '../../context';
import './MessageAnswer.scss';

export function MessageAnswer() {
  const { user } = useContext(UserContext);

  return (
    <div
      className="chat__message"
    >
      <p className="chat__message--user">
        {user.userName === '' ? 'User1' : user.userName}
      </p>
      <p className="chat__message--info">
        {`hello ${user.userName === '' ? 'User1' : user.userName}`}
      </p>
    </div>
  )
};