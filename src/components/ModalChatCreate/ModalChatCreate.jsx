import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./ModalChatCreate.scss";

export function ModalChatCreate({ active, setActive }) {
  const [channelName, setChannelName] = useState('');
  const [channelDiscription, setChannelDiscription] = useState('');

  let history = useHistory();

  // const makeNewChannel = (event) => {
  //   event.preventDefault();
  // };

  const handlerChannelName = ({ target }) => {
    setChannelName(target.channelName);
  };

  const handlerChannelDiscription = ({ target }) => {
    setChannelDiscription(target.channelDiscription);
  };

  return (
    <div
      className={active ? "modal modal--active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content modal__content--active" : "modal__content"}
        onClick={element => element.stopPropagation()}
      >
        <h2 className="modal__title">New channel</h2>
        <form
          action=""
          className="form"
          onSubmit={() => { history.push('/chat') }}
        >
          <input
            type="text"
            className="form__input"
            value={channelName}
            onChange={handlerChannelName}
            placeholder="Channel tittle..."
            required
          />
          <input
            type="text"
            className="form__input"
            value={channelDiscription}
            onChange={handlerChannelDiscription}
            placeholder="Channel description"
            required
          />
          <button
            type="submit"
            className="modal__button"
          >
            Create
          </button>
        </form>
        <button
          className="modal__button modal__button--close"
          type="button"
          onClick={() => setActive(false)}
        >
          Close
        </button>
      </div>
    </div>
  )
};