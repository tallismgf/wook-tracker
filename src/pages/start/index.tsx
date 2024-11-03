import { StackActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  CircleButton,
  Container,
  ContainerImage,
  RowText,
  SubTitle,
  Title,
} from './styles';
import { useCallback, useEffect } from 'react';

export function Start() {
  const { dispatch } = useNavigation();

  const onPressButton = useCallback(() => {
    dispatch(StackActions.replace('Home'));
  }, [dispatch]);

  useEffect(() => {
    const id = setTimeout(onPressButton, 5000);
    return () => {
      clearTimeout(id);
    };
  }, [onPressButton]);

  return (
    <Container>
      <ContainerImage
        source={require('../../assets/welcome_2.png')}
        resizeMode="contain"
      />
      <RowText>
        <Title>WorkTracker</Title>
        <SubTitle>Anote seu progresso</SubTitle>
      </RowText>
      <CircleButton onPress={onPressButton}>
        <Icon name="arrow-right" size={32} color="#fff" />
      </CircleButton>
    </Container>
  );
}
