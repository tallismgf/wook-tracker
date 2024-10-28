import { TextInputProps } from 'react-native';
import { Container, TextInput } from './styles';
import { useTheme } from 'styled-components';

type InputProps = TextInputProps;

export function Input({ multiline, ...rest }: InputProps) {
  const theme = useTheme();

  return (
    <Container multiline={multiline}>
      <TextInput
        {...rest}
        placeholderTextColor={theme.text}
        multiline={multiline}
      />
    </Container>
  );
}
