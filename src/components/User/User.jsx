import React, { useState } from 'react';
import "./User.scss";

export function User({ modalUserActive, setModalUserActive }) {
  const [userName, setUserName] = useState('');
  const [lastUserName, setLastUserName] = useState('');

  // const makeNewChannel = (event) => {
  //   event.preventDefault();
  // };

  const handlerUserName = ({ target }) => {
    setUserName(target.userName);
  };

  const handlerLastUserName = ({ target }) => {
    setLastUserName(target.lastUserName);
  };

  return (
    <div
      className={modalUserActive ? "user user--active" : "user"}
      onClick={() => setModalUserActive(false)}
    >
      <div
        className={modalUserActive ? "modal__content modal__content--active" : "modal__content"}
        onClick={element => element.stopPropagation()}
      >
        <h2 className="modal__title">User</h2>
        <form
          action=""
          className="form"
        >
          <input
            type="text"
            className="form__input"
            value={userName}
            onChange={handlerUserName}
            placeholder="Name"
            required
          />
          <input
            type="text"
            className="form__input"
            value={lastUserName}
            onChange={handlerLastUserName}
            placeholder="Last name"
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
          onClick={() => setModalUserActive(false)}
        >
          Close
        </button>
      </div>
    </div>
  )
};