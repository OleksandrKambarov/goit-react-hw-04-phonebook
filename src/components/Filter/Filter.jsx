import React from 'react';
import PropTypes from 'prop-types';

import styles from './filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <input
      className={styles.search}
      type="text"
      value={value}
      placeholder="Search"
      onChange={onChange}
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
