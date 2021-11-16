/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {View} from 'react-native';
import {MenuButton} from '@Components';
import {PLAY_ICON, PAUSE_ICON, RESTART_ICON, TIMER_ICON} from '@Assets';
import {MenuProps} from './menu';
import {styles} from './style';

const Menu: FC<MenuProps> = props => {
  const onPressTimerButton = () => {
    props.onPressTimerButton();
  };

  const onPlayPauseButton = () => {
    props.onPlayPauseButton();
  };

  const onRestartButton = () => {
    props.onRestartButton();
  };

  return (
    <View
      style={[
        styles.menu,
        {
          backgroundColor:
            props.gamePaused || !props.gameStart ? 'gray' : 'black',
        },
      ]}>
      <MenuButton
        primaryIcon={TIMER_ICON}
        onPressButton={() => onPressTimerButton()}
        style={
          props.gamePaused || !props.gameStart
            ? styles.unBorderedMenuButton
            : styles.menuButton
        }
      />
      {props.gameStart && (
        <>
          <MenuButton
            primaryIcon={props.gamePaused ? PLAY_ICON : PAUSE_ICON}
            onPressButton={() => onPlayPauseButton()}
            style={props.gamePaused ? styles.bigButton : styles.menuButton}
          />
          <MenuButton
            primaryIcon={RESTART_ICON}
            onPressButton={() => onRestartButton()}
            style={
              props.gamePaused ? styles.unBorderedMenuButton : styles.menuButton
            }
          />
        </>
      )}
    </View>
  );
};

export default Menu;
