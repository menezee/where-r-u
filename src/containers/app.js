import React from 'react';
import { Person } from '../components';
import styles from './app.module.css';

const CATEGORY_TEAM = [
  'Byron',
  'Catherine',
  'Catherine',
  'Yosevu',
  'Brandon',
  'Patrick',
  'Shreya',
  'Erich',
  'Vijay',
  'Violeta',
  'Peter',
  'Shaw',
  'Anitha',
  'Ania',
];

function App() {
  return (
    <div className={styles.container}>
      {
        CATEGORY_TEAM.map(teamMember => (
          <Person
            name={teamMember}
          />
        ))
      }
    </div>
  );
}

export default App;
