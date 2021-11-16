export interface TimerSetterProps {
  onTimerChange: (changedTime: number) => void;
  hoursIncluded: boolean;
}
