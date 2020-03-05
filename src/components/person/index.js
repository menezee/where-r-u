import React from 'react';
import PropTypes from 'prop-types';
import styles from './person.module.css';

function Person({ name }) {
  return (
    <div className={styles.column}>
      { name }
    </div>
  )
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
};

export {
  Person,
}
