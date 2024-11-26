import {MD3LightTheme as DefaultTheme} from 'react-native-paper';
import configureFonts, {
  fontConfig,
} from 'react-native-paper/lib/typescript/styles/fonts';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1e88e5',
    primaryContainer: '#D8F3FF',
    // background: palette.neutral99,
    // onPrimary: palette.primary100,
    // onPrimaryContainer: palette.primary10,
    // onBackground: palette.neutral10,
    // inversePrimary: palette.primary80,
  },
  // fontConfig: configureFonts(),
};

export default theme;
