/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class Navbar extends React.PureComponent {
  state = {};
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.backText}>{'BACK'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Navbar;
