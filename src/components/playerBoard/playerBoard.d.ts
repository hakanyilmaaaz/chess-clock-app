import { Modes } from '@Interfaces';

export interface PlayerBoardProps {
  countdown: number;
  increment?: number;
  rotate?: boolean;
  playerName: string;
  playerColor: 'white' | 'black' | 'gray';
  turn?: boolean;
  onPress: any;
  gamePaused: boolean;
  gameStart: boolean;
  timerMode: Modes['timerMode'];
  incrementMode: Modes['incrementMode'];
}
