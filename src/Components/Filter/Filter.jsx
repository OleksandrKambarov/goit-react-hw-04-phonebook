import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onFilter }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder="Search"
      onChange={onFilter}
      className={styles.search}
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
