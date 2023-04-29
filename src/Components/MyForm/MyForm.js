import {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './MyForm.module.css';

export default function MyForm ({onSubmitForm}) {
  
  const [name, setName] = useState('');
  const [number, setNumber]= useState('');


 const onSubmit = e => {
    e.preventDefault();
    onSubmitForm({name,number});
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
      <form onSubmit={onSubmit} className={styles.form}>
        <label className={styles.lebels}>
          Name:
          <input
            type="text"
            onChange={onChangeName}
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={styles.lebels}>
          Number:
          <input
            type="tel"
            value={number}
            onChange={onChangeTel}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" onSubmit={onSubmit} className={styles.btn}>
          Add contact
        </button>
      </form>
    );
  }

  MyForm.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
        };

