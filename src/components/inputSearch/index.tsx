import { useCallback, useState } from 'react';
import { useTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';
import { Container, ContainerIcon, TextInput } from './styles';

export type InputSearchProps = {
  onClickSearch: (text: string) => void;
};

export function InputSearch({ onClickSearch }: InputSearchProps) {
  const theme = useTheme();
  const [text, setText] = useState('');

  const onSearch = useCallback(() => {
    onClickSearch(text);
  }, [text, onClickSearch]);

  return (
    <Container>
      <TextInput
        placeholder="Procurar"
        placeholderTextColor={theme.text}
        onBlur={onSearch}
        onChangeText={setText}
      />
      <ContainerIcon onPress={onSearch}>
        <Icon name="search" size={21} color={theme.text} />
      </ContainerIcon>
    </Container>
  );
}
