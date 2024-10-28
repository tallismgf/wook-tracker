/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/dark';
import Routes from './routes';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
