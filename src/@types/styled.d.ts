import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    primary: string;
    background: string;
    lightBackground: string;
    text: string;
    highPriority: string;
  }
}
