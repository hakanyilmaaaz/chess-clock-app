import React, {FC, useState} from 'react';
import {
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Modal,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';
import {TextInput, TimerSetter, TabBar, Button} from '@Components';
import {INITIAL, TIMER_MODES, INCREMENT_MODES} from '@Constants';
import {Modes} from '@Interfaces';
import {BACK_ICON} from '@Assets';
import {SettingsModalProps} from './settingsModal';
import {styles} from './style';

const SettingsModal: FC<SettingsModalProps> = props => {
  const [selectedTimerMode, setSelectedTimerMode] = useState<
    Modes['timerMode']
  >(INITIAL.TIMER_MODE);
  const [selectedIncrementMode, setSelectedIncrementMode] = useState<
    Modes['incrementMode']
  >(INITIAL.INCREMENT_MODE);
  const [gameTime, setGameTime] = useState<number>(0);
  const [incrementTime, setIncrementTime] = useState<number>(0);
  const [undersidePlayer, setUndersidePlayer] = useState<string>(
    INITIAL.UNDERSIDE_PLAYER_NAME,
  );
  const [upsidePlayer, setUpsidePlayer] = useState<string>(
    INITIAL.UPSIDE_PLAYER_NAME,
  );

  const clear = () => {
    setSelectedTimerMode(INITIAL.TIMER_MODE);
    setSelectedIncrementMode(INITIAL.INCREMENT_MODE);
    setGameTime(0);
    setIncrementTime(0);
    setUndersidePlayer(INITIAL.UNDERSIDE_PLAYER_NAME);
    setUpsidePlayer(INITIAL.UPSIDE_PLAYER_NAME);
  };

  const onSaveButton = () => {
    props.onSaveButton(
      selectedTimerMode,
      selectedIncrementMode,
      gameTime,
      incrementTime,
      upsidePlayer,
      undersidePlayer,
    );
    clear();
  };

  const onBackButton = () => {
    props.onBackButton();
    clear();
  };

  const handleButtonActivity = () => {
    if (gameTime > 0) {
      if (selectedTimerMode.id === 0) {
        return false;
      } else if (incrementTime > 0) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  return (
    <Modal visible={props.isVisible} animationType={'slide'}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.container}>
            <View style={styles.backView}>
              <TouchableOpacity
                style={styles.backView}
                onPress={() => onBackButton()}>
                <Image
                  source={BACK_ICON}
                  style={styles.backIcon}
                  resizeMode={'contain'}
                />
                <Text style={styles.backText}>Continue</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Timer Modes</Text>
            <TabBar
              items={TIMER_MODES}
              selectedTabbar={selectedTimerMode}
              onSelectTab={(item: Modes['timerMode']) =>
                setSelectedTimerMode(item)
              }
            />
            <TimerSetter
              hoursIncluded={true}
              onTimerChange={(changedDuration: number) =>
                setGameTime(changedDuration)
              }
            />
            {selectedTimerMode.id === 1 || selectedTimerMode.id === 2 ? (
              <>
                <Text style={styles.title}>
                  {selectedTimerMode.id === 1
                    ? 'Increment Modes'
                    : 'Bronstein Increment'}
                </Text>
                {selectedTimerMode.id === 1 && (
                  <TabBar
                    items={INCREMENT_MODES}
                    selectedTabbar={selectedIncrementMode}
                    onSelectTab={(item: Modes['incrementMode']) =>
                      setSelectedIncrementMode(item)
                    }
                  />
                )}
                <TimerSetter
                  hoursIncluded={false}
                  onTimerChange={(changedDuration: number) =>
                    setIncrementTime(changedDuration)
                  }
                />
              </>
            ) : null}
            <Text style={styles.title}>Edit Player Names</Text>
            <TextInput
              placeholder={'Underside Player'}
              onChangeText={(text: string) => setUndersidePlayer(text)}
              defaultValue={undersidePlayer}
            />
            <TextInput
              placeholder={'Upside Player'}
              onChangeText={(text: string) => setUpsidePlayer(text)}
              defaultValue={upsidePlayer}
            />
            <Button
              text={'Save & Restart'}
              onPress={() => onSaveButton()}
              isDisabled={handleButtonActivity()}
            />
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default SettingsModal;
