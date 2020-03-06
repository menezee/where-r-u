import {
  aniaPhoto,
  brandonPhoto,
  byronPhoto,
  catherinePhoto,
  erichPhoto,
  peterPhoto,
  shawPhoto,
  vijayPhoto,
  violetaPhoto,
  yosevuPhoto,
  patrickPhoto
} from './images';

const TIME_ZONES = {
  OHIO: 'America/New_York',
  BRAZIL: 'America/Sao_Paulo',
  SAN_FRANCISCO: 'America/Los_Angeles'
};

const TIME_MARKS = [
  '17', '18', '19', '20', '21', '22', '23', '24', '01', '02', '03', '04',
];

const CATEGORY_TEAM = [
  { name: 'Byron', timeZone: TIME_ZONES.OHIO, photo: byronPhoto },
  { name: 'Catherine', timeZone: TIME_ZONES.OHIO, photo: catherinePhoto },
  { name: 'Yosevu', timeZone: TIME_ZONES.OHIO, photo: yosevuPhoto },
  { name: 'Brandon', timeZone: TIME_ZONES.OHIO, photo: brandonPhoto },
  { name: 'Patrick', timeZone: TIME_ZONES.OHIO, photo: patrickPhoto },
  // { name: 'Shreya', timeZone: TIME_ZONES.SAN_FRANCISCO, photo: shr },
  { name: 'Erich', timeZone: TIME_ZONES.BRAZIL, photo: erichPhoto },
  { name: 'Vijay', timeZone: TIME_ZONES.SAN_FRANCISCO, photo: vijayPhoto },
  { name: 'Violeta', timeZone: TIME_ZONES.SAN_FRANCISCO, photo: violetaPhoto },
  { name: 'Peter', timeZone: TIME_ZONES.SAN_FRANCISCO, photo: peterPhoto },
  { name: 'Shaw', timeZone: TIME_ZONES.SAN_FRANCISCO, photo: shawPhoto },
  { name: 'Anitha', timeZone: TIME_ZONES.SAN_FRANCISCO, photo: aniaPhoto },
  { name: 'Ania', timeZone: TIME_ZONES.SAN_FRANCISCO, photo: aniaPhoto },
];

const DATE_OPTIONS = {
  hour12: false,
  hour: 'numeric',
};

export {
  CATEGORY_TEAM,
  TIME_ZONES,
  TIME_MARKS,
  DATE_OPTIONS,
}