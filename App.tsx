import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {PlayerBoard, Menu, SettingsModal} from '@Components';
import {INITIAL} from '@Constants';
import {Modes, PlayerSide} from '@Interfaces';

const App = () => {
  const [timerMode, setTimerMode] = useState<Modes['timerMode']>(
    INITIAL.TIMER_MODE,
  );
  const [incrementMode, setIncrementMode] =
    useState<Modes['incrementMode']>(undefined);
  const [gameTime, setGameTime] = useState<number>(INITIAL.GAME_DURATION);
  const [incrementTime, setIncrementTime] = useState<number>(0);
  const [startedPlayer, setStartedPlayer] =
    useState<PlayerSide['side']>(undefined);
  const [playerTurn, setPlayerTurn] = useState<PlayerSide['side']>(undefined);
  const [isGamePaused, setIsGamePaused] = useState<boolean>(false);
  const [isGameActive, setIsGameActive] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [undersidePlayerName, setUndersidePlayerName] =
    useState<string>('Player 1');
  const [upsidePlayerName, setUpsidePlayerName] = useState<string>('Player 2');

  const handleSettingsModal = () => {
    setIsModalVisible(true);
    setIsGamePaused(true);
  };

  const handleBackButton = () => {
    setIsModalVisible(false);
  };

  const handleSaveButton = (
    newTimerMode: Modes['timerMode'],
    newIncrementMode: Modes['incrementMode'],
    newGameTime: number,
    newIncrementTime: number,
    upsidePlayer: string,
    undersidePlayer: string,
  ) => {
    setIsModalVisible(false);
    setTimerMode(newTimerMode);
    setIncrementMode(newIncrementMode);
    setGameTime(newGameTime);
    setIncrementTime(newIncrementTime);
    setUpsidePlayerName(upsidePlayer);
    setUndersidePlayerName(undersidePlayer);
    handleRestart();
  };

  const handlePlayPause = () => {
    setIsGamePaused(!isGamePaused);
  };

  const handleRestart = () => {
    setStartedPlayer(undefined);
    setPlayerTurn(undefined);
    setIsGamePaused(false);
    setIsGameActive(false);
  };

  const handleGameOrder = (playerSide: PlayerSide['side']) => {
    if (isGameActive) {
      if (playerSide === 'upsidePlayer') {
        setPlayerTurn('undersidePlayer');
      } else if (playerSide === 'undersidePlayer') {
        setPlayerTurn('upsidePlayer');
      }
    } else {
      setIsGameActive(true);
      setStartedPlayer(playerSide);
      setPlayerTurn(playerSide);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <SettingsModal
        isVisible={isModalVisible}
        onBackButton={() => handleBackButton()}
        onSaveButton={(
          newTimerMode,
          newIncrementMode,
          newGameTime,
          newIncrementTime,
          upsidePlayer,
          undersidePlayer,
        ) =>
          handleSaveButton(
            newTimerMode,
            newIncrementMode,
            newGameTime,
            newIncrementTime,
            upsidePlayer,
            undersidePlayer,
          )
        }
      />
      <PlayerBoard
        rotate={true}
        playerName={upsidePlayerName}
        playerColor={
          startedPlayer
            ? startedPlayer === 'upsidePlayer'
              ? 'white'
              : 'black'
            : 'gray'
        }
        turn={
          playerTurn
            ? playerTurn === 'upsidePlayer'
              ? true
              : false
            : undefined
        }
        onPress={() => handleGameOrder('upsidePlayer')}
        gamePaused={isGamePaused}
        gameStart={isGameActive}
        countdown={gameTime}
        increment={incrementTime}
        timerMode={timerMode}
        incrementMode={incrementMode}
      />
      <PlayerBoard
        playerName={undersidePlayerName}
        playerColor={
          startedPlayer
            ? startedPlayer === 'undersidePlayer'
              ? 'white'
              : 'black'
            : 'gray'
        }
        turn={
          playerTurn
            ? playerTurn === 'undersidePlayer'
              ? true
              : false
            : undefined
        }
        onPress={() => handleGameOrder('undersidePlayer')}
        gamePaused={isGamePaused}
        gameStart={isGameActive}
        countdown={gameTime}
        increment={incrementTime}
        timerMode={timerMode}
        incrementMode={incrementMode}
      />
      <Menu
        onPressTimerButton={() => handleSettingsModal()}
        onPlayPauseButton={() => {
          handlePlayPause();
        }}
        onRestartButton={() => handleRestart()}
        gamePaused={isGamePaused}
        gameStart={isGameActive}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
