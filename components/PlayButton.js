/* eslint-disable prettier/prettier */
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

class PlayButton extends React.PureComponent {
  render() {
    const {handlePress} = this.props;
    return (
      <Pressable onPress={() => handlePress()} style={styles.button}>
        <Text style={styles.buttonText}>PLAY</Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    borderRadius: 50,
    width: 55,
    height: 55,
    padding: 10,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default PlayButton;
