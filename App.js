import { Asset, Font } from 'expo';
import React from 'react';
import { Image } from 'react-native';
import LoginScreen from './app/screens/Login';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isReady: false };
  }

  cacheImages(images) {
    return images.map((image) => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      }
      return Asset.fromModule(image).downloadAsync();
    });
  }

  cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font))
  }

  async init() {
    try {
      const imageAssets = this.cacheImages([
        require('./app/assets/images/person-placeholder.jpg'),
        require('./app/assets/images/dawasco.png'),
      ]);

      const fontAssets = this.cacheFonts([
        { Lato: require('./app/assets/fonts/Lato-Regular.ttf') },
        { Roboto_medium: require('./app/assets/fonts/Roboto-Medium.ttf') }
      ]);

      await Promise.all([...fontAssets, ...imageAssets]);

    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <LoginScreen />
    );
  }
}
