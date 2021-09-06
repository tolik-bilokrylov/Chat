import React, { useState } from 'react';
import './MessageForm.scss'

export function MessageForm({ ...props }) {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };
  return (
    <form
      action=""
      className="chat__form"
      onSubmit={handleSubmit}
    >
      <textarea
        className="chat__input--text"
        value={input}
        onChange={handleChange}
        wrap="soft | hard"
      >
      </textarea>
      <button
        className="chat__btn"
        onClick={handleSubmit}
      >
        Send
      </button>
    </form>
  )
}
