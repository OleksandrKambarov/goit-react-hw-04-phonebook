import React from 'react';
import PropTypes from 'prop-types';

import style from './contactlist.module.css';

const ContactList = ({ contacts, delContact }) => {
  return (
    <ul className={style.contactList}>
      {contacts.map(item => (
        <li key={item.id} className={style.contactList__item}>
          <span>{item.name}</span>
          <span>{item.number}</span>
          <button
            className={style.contactList__button}
            onClick={() => delContact(item.id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  delContact: PropTypes.func.isRequired,
};

export default ContactList;
