import {Modes} from '@Interfaces';

export interface SettingsModalProps {
  isVisible: boolean;
  onBackButton: () => void;
  onSaveButton: (
    selectedTimerMode: Modes['timerMode'],
    selectedIncrementMode: Modes['incrementMode'],
    gameTime: number,
    incrementTime: number,
    upsidePlayer: string,
    undersidePlayer: string,
  ) => void;
}
