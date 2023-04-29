import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './form.module.css';

function Form({ handleForm }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleForm({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleChange = ({ target }) => {
    setName(target.currentTarget.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </label>
      <button className={styles.form__button} type="submit">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
