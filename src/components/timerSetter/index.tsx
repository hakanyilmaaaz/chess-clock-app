/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {NumericInput} from '@Components';
import {secondsConverter} from '@Helper';
import {TimerSetterProps} from './timerSetter';
import {styles} from './style';

const TimerSetter: FC<TimerSetterProps> = props => {
  const [hours, setHours] = useState<string>('0');
  const [minutes, setMinutes] = useState<string>('0');
  const [seconds, setSeconds] = useState<string>('0');

  useEffect(() => {
    props.onTimerChange(secondsConverter(hours, minutes, seconds));
  }, [hours, minutes, seconds]);

  const formatHours = (time: string) => {
    setHours(time);
  };

  const formatMinutes = (time: string) => {
    if (parseInt(time, 10) > 59) {
      setMinutes('59');
    } else {
      setMinutes(time);
    }
  };

  const formatSeconds = (time: string) => {
    if (parseInt(time, 10) > 59) {
      setSeconds('59');
    } else {
      setSeconds(time);
    }
  };

  return (
    <View>
      {props.hoursIncluded && (
        <View style={styles.inputView}>
          <NumericInput
            onChangeText={number => formatHours(number)}
            value={hours}
          />
          <Text style={styles.periodText}>hours</Text>
        </View>
      )}
      <View style={styles.inputView}>
        <NumericInput
          onChangeText={number => formatMinutes(number)}
          value={minutes}
        />
        <Text style={styles.periodText}>minutes</Text>
      </View>
      <View style={styles.inputView}>
        <NumericInput
          onChangeText={number => formatSeconds(number)}
          value={seconds}
        />
        <Text style={styles.periodText}>seconds</Text>
      </View>
    </View>
  );
};

export default TimerSetter;
