/* eslint-disable react-native/no-inline-styles */
import { FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { InputSearch } from '../../components/inputSearch';
import { AddButton, Container } from './styles';
import { Card } from '../../components/card';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

const GAP = 12;

const tempData = [
  {
    id: '1',
    title: 'Releitura book',
    deadLine: '19/10/2024',
  },
  {
    id: '2',
    title: 'Releitura book 2',
    deadLine: '20/10/2024',
  },
  {
    id: '3',
    title: 'Releitura book 3',
    deadLine: '20/10/2024',
  },
];

export function Home() {
  const theme = useTheme();
  const { navigate } = useNavigation();

  const disabledKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={disabledKeyboard}>
      <Container>
        <InputSearch onClickSearch={text => console.log(text)} />

        <FlatList
          data={tempData}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Card title={item.title} deadline={item.deadLine} />
          )}
          numColumns={2}
          columnWrapperStyle={{
            gap: GAP,
            marginBottom: GAP,
            justifyContent: 'space-between',
          }}
        />

        <AddButton onPress={() => navigate('Create' as never)}>
          <Icon name="plus" size={32} color={theme.text} />
        </AddButton>
      </Container>
    </TouchableWithoutFeedback>
  );
}
