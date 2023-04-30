import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const ContactsList = ({ contacts, onDeleteClick }) => (
  <ul className={styles.contactList}>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id} className={styles.item}>
          {name}: {number}
          <button
            className={styles.button}
            onClick={() => onDeleteClick(id)}
            type="button"
          >
            x
          </button>
        </li>
      );
    })}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactsList;
