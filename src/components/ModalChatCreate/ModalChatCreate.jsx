import React, { useState, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import { ChatContext } from '../../context';
import { v4 as uuidv4 } from 'uuid';
import "./ModalChatCreate.scss";

export function ModalChatCreate({ active, setActive, ...props }) {
  const { chat, handlerChatName, handlerChatDiscription, handlerChatId } = useContext(ChatContext);
  const [inputChatName, setInputChatName] = useState('');
  const [inputChatDiscription, setInputChatDiscription] = useState('');

  const handleChangeChatName = (event) => {
    setInputChatName(event.target.value);
  };

  const handleChangeChatDiscription = (event) => {
    setInputChatDiscription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handlerChatName(inputChatName);
    handlerChatDiscription(inputChatDiscription);
    handlerChatId(uuidv4());
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      chatName: inputChatName,
      chatDiscription: inputChatDiscription
    });
    setInputChatName('');
    setInputChatDiscription('');
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
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="form__input"
            value={inputChatName}
            onChange={handleChangeChatName}
            placeholder="Channel tittle..."
            required
          />
          <input
            type="text"
            className="form__input"
            value={inputChatDiscription}
            onChange={handleChangeChatDiscription}
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