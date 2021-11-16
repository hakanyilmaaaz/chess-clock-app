import React, {FC} from 'react';
import {TextInput} from 'react-native';
import {InputProps} from './input';
import {styles} from './style';

const NumericInput: FC<InputProps> = props => {
  return (
    <TextInput
      value={Number(props.value) > 0 ? props.value : ''}
      style={styles.input}
      allowFontScaling={false}
      onChangeText={props.onChangeText}
      placeholder={'00'}
      placeholderTextColor={'gray'}
      keyboardType={'number-pad'}
      maxLength={2}
    />
  );
};

export default NumericInput;
