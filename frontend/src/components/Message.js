import React from 'react';

import './Message.css';

const Message = ({ type, children }) => {
  return <h1 className={type}>{children}</h1>;
};

export default Message;
