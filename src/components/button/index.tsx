/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from './button';
import {styles} from './style';

const Button: FC<ButtonProps> = props => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: props.isDisabled ? 'gray' : 'black'},
      ]}
      onPress={props.onPress}
      disabled={props.isDisabled}>
      <Text style={styles.text} allowFontScaling={false} numberOfLines={1}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
