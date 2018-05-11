import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignSelf: 'center',
    width: '80%',
    justifyContent: 'center',
    paddingHorizontal: 10,

  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
  },
  caption: {
    color: 'white',
  },
});


const Button = ({ onPress, caption, isAuthenticating }) => (
  <View style={styles.container}>
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.button}
      onPress={onPress}
    >
      {
        isAuthenticating ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.caption}>{caption}</Text>
      }
    </TouchableOpacity>
  </View>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  caption: PropTypes.string.isRequired,
  isAuthenticating: PropTypes.bool.isRequired,
};

export default Button;

