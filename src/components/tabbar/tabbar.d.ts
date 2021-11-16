import {Modes} from '@Interfaces';

export interface TabBarProps {
  items: any;
  selectedTabbar: Modes['timerMode'] | Modes['incrementMode'];
  onSelectTab: (item: any) => void;
}
