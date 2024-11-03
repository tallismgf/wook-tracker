/* eslint-disable react-native/no-inline-styles */
import { Modal, TouchableWithoutFeedback } from 'react-native';
import { Button } from '../button';
import { Demand } from '../../entities/demand';
import {
  Container,
  Title,
  Card,
  Description,
  Row,
  Item,
  Label,
  Priority,
} from './styles';
import { useDemands } from '../../hooks/useDemands';
import { useCallback } from 'react';

type DemandDetailProps = {
  visible: boolean;
  demand: Demand | undefined;
  onChangeVisible: () => void;
};

export function DemandDetail({
  visible,
  demand,
  onChangeVisible,
}: DemandDetailProps) {
  const { deleteDemand, finishDemand } = useDemands();

  const onDeleteDemand = useCallback(
    (id: string) => {
      deleteDemand(id);
      onChangeVisible();
    },
    [deleteDemand, onChangeVisible],
  );

  const onFinishDemand = useCallback(
    (id: string) => {
      finishDemand(id);
      onChangeVisible();
    },
    [finishDemand, onChangeVisible],
  );

  if (!demand) {
    return <></>;
  }

  return (
    <Modal
      visible={visible}
      onDismiss={onChangeVisible}
      animationType="slide"
      transparent
    >
      <TouchableWithoutFeedback onPress={onChangeVisible}>
        <Container>
          <Card>
            <Title>{demand.title}</Title>
            <Description>{demand.description}</Description>
            <Row>
              <Item>
                <Label>Prazo final: </Label>
                <Label>{demand.deadline}</Label>
              </Item>
              <Item>
                <Label>Prioridade: </Label>
                <Priority highPriority={demand.priority === 'high'}>
                  <Label>
                    {demand.priority === 'high' ? 'Alta' : 'Normal'}
                  </Label>
                </Priority>
              </Item>
            </Row>
            <Button
              label="Finalizar"
              style={{ backgroundColor: '#4CAF50' }}
              onPress={() => onFinishDemand(demand.id)}
            />
            <Button label="Editar" />
            <Button
              label="Excluir"
              style={{ backgroundColor: '#F44336' }}
              onPress={() => onDeleteDemand(demand.id)}
            />
          </Card>
        </Container>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
