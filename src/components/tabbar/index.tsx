/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Modes} from '@Interfaces';
import {TabBarProps} from './tabbar';
import {styles} from './style';

const TabBar: FC<TabBarProps> = props => {
  return (
    <View style={styles.container}>
      {props.items.map((item: Modes['timerMode'] | Modes['incrementMode']) => {
        return (
          <TouchableOpacity
            key={item?.id}
            style={[
              styles.itemView,
              {
                backgroundColor:
                  props.selectedTabbar?.id === item?.id
                    ? 'black'
                    : 'transparent',
              },
            ]}
            onPress={() => props.onSelectTab(item)}>
            <Text
              style={[
                styles.itemText,
                {
                  fontWeight:
                    props.selectedTabbar?.id === item?.id ? 'bold' : 'normal',
                  color:
                    props.selectedTabbar?.id === item?.id ? 'white' : 'black',
                },
              ]}
              numberOfLines={1}>
              {item?.modeName}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
