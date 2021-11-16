import React, {FC} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {MenuButtonProps} from './menuButton';
import {styles} from './style';

const MenuButton: FC<MenuButtonProps> = props => {
  return (
    <TouchableOpacity
      style={props.style ? props.style : styles.menuButton}
      onPress={() => props.onPressButton()}>
      <Image source={props.primaryIcon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default MenuButton;
