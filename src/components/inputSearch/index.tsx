import { useTheme } from 'styled-components';
import { Container, TextInput } from './styles';

export type InputSearchProps = {
  text: string;
  onChangeText: (text: string) => void;
};

export function InputSearch({ text, onChangeText }: InputSearchProps) {
  const theme = useTheme();

  return (
    <Container>
      <TextInput
        placeholder="Procurar"
        placeholderTextColor={theme.text}
        value={text}
        onChangeText={onChangeText}
      />
    </Container>
  );
}
