import Icon from 'react-native-vector-icons/Feather';
import {
  CircleButton,
  Container,
  ContainerImage,
  RowText,
  SubTitle,
  Title,
} from './styles';
import { StackActions, useNavigation } from '@react-navigation/native';

export function Start() {
  const { dispatch } = useNavigation();

  function onPressButton() {
    dispatch(StackActions.replace('Home'));
  }

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
