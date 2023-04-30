import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MyForm.module.css';

export default function MyForm({ onSubmitForm }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    onSubmitForm({ name, number });
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const onChangeName = e => {
    setName(e.currentTarget.value);
  };

  const onChangeTel = e => {
    setNumber(e.currentTarget.value);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.form__label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeName}
        />
      </label>
      <label className={styles.form__label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          placeholder="Enter number +XX (YYY) XXX XX XX"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeTel}
        />
      </label>
      <button className={styles.form__button} type="submit">
        Add contact
      </button>
    </form>
  );
}

MyForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
