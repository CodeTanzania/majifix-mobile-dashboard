import { SimpleLineIcons as Icon } from '@expo/vector-icons';
import { Container, Input, Item } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import Button from '../components/Button';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: '30%',
  },
  image: {
    alignSelf: 'center',
    height: 130,
    width: 130
  },
  form: {
    alignSelf: 'center',
    width: '75%',
    paddingLeft: 0
  },
  formItem: {
    marginTop: 10,
    color: '#2196F3'
  },
  inputIcon: {
    paddingLeft: 5
  }
});


class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.focusNextField = this.focusNextField.bind(this);
  }

  focusNextField() {
    this.nextInput.focus();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Container>
          <View style={styles.content}>
            {/* organization logo */}
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('../assets/images/dawasco.png')}
            />
            {/* end organization logo */}
            {/* sign in form */}
            <View style={styles.form}>
              <Item style={styles.formItem}>
                <Icon name="envelope" color="#2196F3" style={styles.inputIcon} />
                <Input
                  placeholder="Email"
                  returnKeyType="next"
                  selectionColor="#2196F3"
                  placeholderTextColor="#2196F3"
                  blurOnSubmit={false}
                  onSubmitEditing={() => { this.focusNextField(); }}
                  onChangeText={username => this.setState({ username })}
                />
              </Item>
              <Item style={styles.formItem}>
                <Icon name="lock-open" color="#2196F3" style={styles.inputIcon} />
                <Input
                  ref={(input) => { this.nextInput = input; }}
                  placeholder="Password"
                  secureTextEntry
                  selectionColor="#2196F3"
                  placeholderTextColor="#2196F3"
                  onChangeText={password => this.setState({ password })}
                />
              </Item>
            </View>
            {/* end sign in form */}
            {/* sign in button */}
            <Button
              caption="Sign in"
              onPress={() => {
                this.props.login({ username: this.state.username, password: this.state.password });
              }}
            />
            {/* end sign in button */}
          </View>
        </Container>
      </SafeAreaView>
    );
  }
}

LoginScreen.propTypes = {
  login: PropTypes.func.isRequired
};

export default LoginScreen;
