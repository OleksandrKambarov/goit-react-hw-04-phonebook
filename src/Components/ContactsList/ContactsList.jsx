import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
import styles from './ContactList.module.css';

const ContactsList = ({ contacts, onDeleteClick }) => (
  <ul className={styles.contactList}>
    <ContactItem contacts={contacts} onDeleteClick={onDeleteClick} />
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactsList;
