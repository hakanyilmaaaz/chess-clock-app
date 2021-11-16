export type TimerNames = {
  modeName: 'None' | 'Fischer' | 'Bronstein';
};

export type IncrementNames = {
  modeName: 'Before' | 'Delay';
};

export type Modes = {
  timerMode: {id: number; modeName: TimerNames};
  incrementMode: {id: number; modeName: IncrementNames} | undefined;
};

export type PlayerSide = {
  side: 'upsidePlayer' | 'undersidePlayer' | undefined;
};
