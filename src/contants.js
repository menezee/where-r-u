import {
  aniaPhoto,
  brandonPhoto,
  byronPhoto,
  erichPhoto,
  peterPhoto,
  vijayPhoto,
  patrickPhoto,
  anithaPhoto,
  jucienyPhoto,
  pedroPhoto,
  stephanoPhoto,
  thainaraPhoto,
} from './images';

const TIME_ZONES = {
  OHIO: 'America/New_York',
  BRAZIL: 'America/Sao_Paulo',
  SAN_FRANCISCO: 'America/Los_Angeles'
};

const TIME_MARKS = [
  '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
];

const CATEGORY_TEAM = [
  { name: 'Byron', timeZone: TIME_ZONES.OHIO, photo: byronPhoto },
  { name: 'Brandon', timeZone: TIME_ZONES.OHIO, photo: brandonPhoto },
  { name: 'Patrick', timeZone: TIME_ZONES.OHIO, photo: patrickPhoto },
  { name: 'Erich', timeZone: TIME_ZONES.BRAZIL, photo: erichPhoto },
  { name: 'Jucieny', timeZone: TIME_ZONES.BRAZIL, photo: jucienyPhoto },
  { name: 'Pedro', timeZone: TIME_ZONES.BRAZIL, photo: pedroPhoto },
  { name: 'Stephano', timeZone: TIME_ZONES.BRAZIL, photo: stephanoPhoto },
  { name: 'Thainara', timeZone: TIME_ZONES.BRAZIL, photo: thainaraPhoto },
  { name: 'Vijay', timeZone: TIME_ZONES.SAN_FRANCISCO, photo: vijayPhoto },
  { name: 'Peter', timeZone: TIME_ZONES.SAN_FRANCISCO, photo: peterPhoto },
  { name: 'Anitha', timeZone: TIME_ZONES.SAN_FRANCISCO, photo: anithaPhoto },
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
