export interface MenuProps {
  onPressTimerButton: () => void;
  onPlayPauseButton: () => void;
  onRestartButton: () => void;
  gameStart: boolean;
  gamePaused: boolean;
}
