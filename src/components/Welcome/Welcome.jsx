import React, { useState } from 'react';
import { ModalChatCreate } from '../ModalChatCreate';
import './Welcome.scss';

export function Welcome() {
  const [modalActive, setModalActive] = useState(false);

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
      <ModalChatCreate
        active={modalActive}
        setActive={setModalActive}
      />
    </div>
  )
}

