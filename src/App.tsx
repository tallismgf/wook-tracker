/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/dark';
import Routes from './routes';
import DemandsProvider from './context/demands';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
dayjs.extend(customParseFormat);

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <DemandsProvider>
          <Routes />
        </DemandsProvider>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
