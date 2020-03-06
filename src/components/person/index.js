import React from 'react';
import PropTypes from 'prop-types';
import styles from './person.module.css';

function Person({ name, photo }) {
  return (
    <div className={styles.column}>
      <div> {name} </div>
      <img src={photo} alt={`${name}`} className={styles.photo} />
    </div>
  )
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
};

export {
  Person,
}
