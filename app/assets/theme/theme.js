import { merge } from 'lodash';
import { getTheme, defaultThemeVariables } from '@shoutem/ui';

const customThemeVariables = {
  heading: {
    fontFamily: 'Lato',
  },
  title: { fontFamily: 'Lato' },
  subtitle: { fontFamily: 'Lato' },
  caption: { fontFamily: 'Lato' },
  text: { fontFamily: 'Lato' },
};

const themeVariables = merge(defaultThemeVariables, customThemeVariables);

export default getTheme(themeVariables);
