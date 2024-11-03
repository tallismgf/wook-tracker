import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import dayjs from 'dayjs';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/input';
import { PickerDate } from '../../components/pickerDate';
import { useCallback, useState } from 'react';
import { Button } from '../../components/button';
import { CreateDemand } from '../../entities/demand';
import { useDemands } from '../../hooks/useDemands';
import {
  ButtonPriority,
  Container,
  LabelPriority,
  RowDate,
  RowDateLabel,
  RowPriority,
  RowPriorityLabel,
  Title,
} from './styles';

export function CreateTask() {
  const { goBack } = useNavigation();
  const { createDemand } = useDemands();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState<Date | undefined>();
  const [highPriority, setHighPriority] = useState(false);

  const disabledKeyboard = () => {
    Keyboard.dismiss();
  };

  const onPressAdd = useCallback(() => {
    const formattedDate = dayjs(deadline).format('DD/MM/YYYY');
    const demand: CreateDemand = {
      title,
      description,
      deadline: formattedDate,
      priority: highPriority ? 'high' : 'normal',
    };
    createDemand(demand);
    goBack();
  }, [deadline, description, highPriority, title, createDemand, goBack]);

  return (
    // <KeyboardAvoidingView
    //   style={{ flex: 1 }}
    //   behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    //   keyboardVerticalOffset={40}
    // >
    <TouchableWithoutFeedback onPress={disabledKeyboard}>
      <Container>
        <Title>Nova Demanda</Title>

        <Input placeholder="Titulo" value={title} onChangeText={setTitle} />

        <Input
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <RowDate>
          <RowDateLabel>Prazo final:</RowDateLabel>
          <PickerDate onSelectDate={date => setDeadline(date)} />
        </RowDate>

        <RowPriority>
          <RowPriorityLabel>Prioridade:</RowPriorityLabel>
          <ButtonPriority
            active={highPriority}
            onPress={() => setHighPriority(prevState => !prevState)}
          >
            <LabelPriority active={highPriority}>
              {highPriority ? 'Alta' : 'Normal'}
            </LabelPriority>
          </ButtonPriority>
        </RowPriority>

        <Button label="Adicionar" onPress={onPressAdd} />
      </Container>
    </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  );
}
