import { pick } from 'lodash';
import { AlertIOS, AsyncStorage, Platform, ToastAndroid } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { startLoading } from '../actions/shared';
import * as config from '../config/config';
import * as types from './actionTypes';
import { asyncFetchOverview } from './dashboard.actions';

export function signedIn() {
  return { type: types.SIGNED_IN };
}

export function signedOut() {
  return { type: types.SIGNED_OUT };
}

export function singingIn() {
  return { type: types.SIGNING_IN };
}

export function signingInComplete() {
  return { type: types.SIGNING_IN_COMPLETE };
}

export function updateToken(token) {
  return { type: types.UPDATE_TOKEN, payload: token };
}

export function updateParty(party) {
  return { type: types.UPDATE_PARTY, payload: party };
}


export function asyncPersistToken(token) {
  return dispatch => AsyncStorage.setItem(config.TOKEN_NAME, token)
    .then(() => {
      dispatch(updateToken(token));

      dispatch(startLoading());

      dispatch(asyncFetchOverview());
    })
    .catch((error) => {
      console.log(error);
    });
}

export function asyncPersistProfile(party) {
  return dispatch => AsyncStorage.setItem(config.PROFILE, JSON.stringify(party))
    .then(() => {
      dispatch(updateParty(party));
    })
    .catch((error) => {
      console.log(error);
    });
}

export function asyncPersistSignedInState() {
  return dispatch => AsyncStorage.setItem(config.IS_SIGNED_IN, 'true')
    .then(() => {
      dispatch(signedIn());

      dispatch(signingInComplete());
    })
    .catch((error) => {
      console.log(error);
    });
}


/**
 * Authenticate user against the API
 * @param {Object} credentials - username and password of the user
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @version 0.1.0
 * @since 0.1.0
 */
export function asyncLogin(credentials) {
  return (dispatch) => {
    dispatch(singingIn());

    return fetch('https://dawasco.herokuapp.com/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: credentials.username,
        password: credentials.password,
      }),
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((data) => {
        // extract needed data from the response

        const { token = '', success = false } = data;

        if (success) {
          const party = pick(data.party, ['name', 'email', 'phone']);

          dispatch(asyncPersistToken(token));

          dispatch(asyncPersistProfile(party));

          dispatch(asyncPersistSignedInState());

          dispatch(NavigationActions.navigate({ routeName: 'Home' }));
        } else if (Platform.OS === 'android') {
          ToastAndroid.showWithGravity(
            'Invalid Email or Password',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
        } else {
          AlertIOS.alert('Login Failed', 'Invalid Email or Password');
        }
        dispatch(signingInComplete());
      });
  };
}
