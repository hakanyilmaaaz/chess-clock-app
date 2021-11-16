/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {FC, useEffect, useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {timeDisplayer} from '@Helper';
import {PlayerBoardProps} from './playerBoard';
import {styles} from './style';

const PlayerBoard: FC<PlayerBoardProps> = props => {
  const [seconds, setSeconds] = useState<number>(0);
  const [pause, setPause] = useState<boolean>();
  const [moveCounter, setMoveCounter] = useState<number>(0);
  const [bronsteinCounter, setBronsteinCounter] = useState<number>(0);
  const [isBeforeDelayAdded, setIsBeforeDelayAdded] = useState<boolean>(false);

  useEffect(() => {
    setMoveCounter(0);
    setSeconds(props.countdown);
  }, [props.gameStart, props.countdown]);

  useEffect(() => {
    if (props.turn === true && props.playerColor) {
      if (props.gamePaused) {
        setPause(true);
      } else {
        if (
          props.timerMode.id === 1 &&
          props.incrementMode &&
          props.increment
        ) {
          if (
            props.gameStart &&
            props.incrementMode.id === 0 &&
            props.gameStart
          ) {
            if (!isBeforeDelayAdded) {
              setSeconds(seconds + props.increment);
            }
            setIsBeforeDelayAdded(true);
          }
        }
        setPause(false);
      }
      props.gamePaused ? setPause(true) : setPause(false);
    } else {
      setPause(true);
    }
  }, [props.turn, props.gamePaused]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        if (seconds > 0) {
          props.timerMode.id === 2 && setBronsteinCounter(bronsteinCounter + 1);
          setSeconds(seconds - 1);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  const handleTouchOnBoard = () => {
    props.gameStart && setMoveCounter(moveCounter + 1);
    if (props.timerMode.id === 1) {
      if (props.incrementMode && props.increment) {
        if (props.gameStart && props.incrementMode.id === 1) {
          setSeconds(seconds + props.increment);
        } else setIsBeforeDelayAdded(false);
      }
    } else if (props.timerMode.id === 2 && props.increment) {
      if (bronsteinCounter >= props.increment) {
        setSeconds(seconds + props.increment);
      } else {
        setSeconds(seconds + bronsteinCounter);
      }
      setBronsteinCounter(0);
    }
    props.onPress();
  };

  return (
    <TouchableOpacity
      disabled={
        !props.gameStart
          ? false
          : props.gamePaused
          ? true
          : props.turn
          ? false
          : true
      }
      onPress={() => handleTouchOnBoard()}
      style={[
        styles.board,
        {
          backgroundColor: !props.gameStart
            ? 'gray'
            : props.gamePaused
            ? 'gray'
            : props.playerColor === 'white'
            ? 'white'
            : props.playerColor === 'black'
            ? 'black'
            : 'gray',
        },
        {transform: props.rotate ? [{rotate: '180deg'}] : [{rotate: '0deg'}]},
      ]}>
      <Text
        style={[
          styles.playerName,
          {
            color: props.gamePaused
              ? 'white'
              : props.playerColor === 'white'
              ? 'black'
              : 'white',
          },
        ]}>
        {props.playerName}
      </Text>
      <Text
        style={[
          styles.timerText,
          {
            color: props.gamePaused
              ? 'white'
              : props.playerColor === 'white'
              ? 'black'
              : 'white',
          },
        ]}
        numberOfLines={1}>
        {timeDisplayer(seconds)}
      </Text>
      <Text
        style={[
          styles.move,
          {
            color: props.gamePaused
              ? 'white'
              : props.playerColor === 'white'
              ? 'black'
              : 'white',
          },
        ]}>
        {props.gameStart
          ? `Move: ${moveCounter}`
          : 'Tap to start the game \n if you play with white pieces'}
      </Text>
    </TouchableOpacity>
  );
};

export default PlayerBoard;
