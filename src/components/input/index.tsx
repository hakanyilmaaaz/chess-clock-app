import React, {FC} from 'react';
import {TextInput} from 'react-native';
import {InputProps} from './input';
import {styles} from './style';

const Input: FC<InputProps> = props => {
  return (
    <TextInput
      style={styles.input}
      allowFontScaling={false}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      placeholderTextColor={'gray'}
      numberOfLines={1}
      value={props.defaultValue}
    />
  );
};

export default Input;
