import {IncrementNames, TimerNames} from '@Interfaces';

const INITIAL = {
  GAME_DURATION: 900,
  TIMER_MODE: {
    id: 0,
    modeName: 'None' as unknown as TimerNames,
  },
  INCREMENT_MODE: {
    id: 0,
    modeName: 'Before' as unknown as IncrementNames,
  },
  UNDERSIDE_PLAYER_NAME: 'Player 1',
  UPSIDE_PLAYER_NAME: 'Player 2',
};

const TIMER_MODES = [
  {id: 0, modeName: 'None'},
  {id: 1, modeName: 'Fischer'},
  {id: 2, modeName: 'Bronstein'},
];

const INCREMENT_MODES = [
  {id: 0, modeName: 'Before'},
  {id: 1, modeName: 'After'},
];

export {INITIAL, TIMER_MODES, INCREMENT_MODES};
