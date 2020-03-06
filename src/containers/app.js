import React, { useState } from 'react';
import styles from './app.module.css';
import { CATEGORY_TEAM, TIME_MARKS, DATE_OPTIONS } from '../contants';
import { Person } from '../components/person';

function mapToArr(map) {
  return [...map.entries()];
}

function App() {
  const getCurrentTimeForPerson = ({ timeZone } = {}) => {
    const maybeTimeZone = timeZone ? { timeZone } : {};
    return new Date().toLocaleString('en-US', {...maybeTimeZone, ...DATE_OPTIONS, });
  };

  const getTimeLabel = time => {
    const timeAsNumber = Number(time);

    const isNight = timeAsNumber > 18 || timeAsNumber < 7;

    if (isNight) {
      return 'night';
    }

    return 'day';
  };

  const [timeMarks] =
    useState(() => {
      const workinsHoursMap = new Map([...TIME_MARKS.map(timeMark => [timeMark, []])]);

      CATEGORY_TEAM.forEach(teamMember => {
        const teamMemberTime = getCurrentTimeForPerson(teamMember);

        if (workinsHoursMap.has(teamMemberTime)) {
          const membersOnTime = workinsHoursMap.get(teamMemberTime);
          workinsHoursMap.set(teamMemberTime, [...membersOnTime, teamMember]);
        }
      });

      return workinsHoursMap;
    });

  return (
    <div className={styles.container}>
      {
        mapToArr(timeMarks).map(([time, members]) =>
          <div
            className={`${styles.row} ${styles[getTimeLabel(time)]}`}
            key={time}
          >
            <div>
              {time}
            </div>
            {
              members.map(({ name, photo }) => (
                <Person name={name} photo={photo} />
              ))
            }
          </div>
        )
      }
    </div>
  );
}

export default App;
