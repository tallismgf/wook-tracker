/* eslint-disable react-native/no-inline-styles */
import { FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { InputSearch } from '../../components/inputSearch';
import {
  AddButton,
  ButtonFilter,
  Container,
  LabelFilter,
  RowFilters,
} from './styles';
import { Card } from '../../components/card';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { useDemands } from '../../hooks/useDemands';
import { useCallback, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { DemandDetail } from '../../components/DemandDetail';
import { Demand } from '../../entities/demand';

const GAP = 12;

enum FilterKey {
  inProgress = 'inProgress',
  finished = 'finished',
  all = 'all',
}

const FilterItems = [
  {
    label: 'Em progresso',
    key: FilterKey.inProgress,
  },
  {
    label: 'Finalizadas',
    key: FilterKey.finished,
  },
  {
    label: 'Todas',
    key: FilterKey.all,
  },
];

export function Home() {
  const theme = useTheme();
  const { demands } = useDemands();
  const { navigate } = useNavigation();
  const [showModal, setShowModal] = useState(true);
  const [selectedDemand, setSelectedDemand] = useState<Demand | undefined>();
  const [textSearch, setTextSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterKey>(
    FilterKey.inProgress,
  );

  const disabledKeyboard = () => {
    Keyboard.dismiss();
  };

  const onSelectCard = useCallback(
    (id: string) => {
      const demand = demands.find(item => item.id === id);
      setShowModal(true);
      setSelectedDemand(demand);
    },
    [demands],
  );

  const demandsFormatted = useMemo(() => {
    const demandsFiltered = demands.filter(demand =>
      demand.title.includes(textSearch),
    );

    const demandsCustom = demandsFiltered.map(({ id, deadline, title }) => ({
      id,
      title,
      deadline,
    }));
    const sortedDemands = demandsCustom.sort((a, b) => {
      const dateA = dayjs(a.deadline, 'DD/MM/YYYY');
      const dateB = dayjs(b.deadline, 'DD/MM/YYYY');
      return dateA.isBefore(dateB) ? -1 : 1;
    });
    return sortedDemands;
  }, [demands, textSearch]);

  return (
    <>
      <TouchableWithoutFeedback onPress={disabledKeyboard}>
        <Container>
          <InputSearch text={textSearch} onChangeText={setTextSearch} />

          <RowFilters>
            {FilterItems.map(item => (
              <ButtonFilter
                key={item.key}
                active={item.key === activeFilter}
                onPress={() => setActiveFilter(item.key)}
              >
                <LabelFilter>{item.label}</LabelFilter>
              </ButtonFilter>
            ))}
          </RowFilters>

          <FlatList
            data={demandsFormatted}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                deadline={item.deadline}
                onPressCard={() => onSelectCard(item.id)}
              />
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
      <DemandDetail
        visible={showModal}
        demand={selectedDemand}
        onChangeVisible={() => setShowModal(false)}
      />
    </>
  );
}
