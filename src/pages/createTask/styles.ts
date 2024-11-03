import styled from 'styled-components/native';
import { BaseText } from '../../common/styles/components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding: 24px;
  gap: 24px;
`;

export const RowDate = styled.View`
  flex-direction: row;
  gap: 6px;
  align-items: center;
`;

export const RowDateLabel = styled(BaseText)`
  font-size: 14px;
`;

export const RowPriority = styled(RowDate)``;

export const RowPriorityLabel = styled(RowDateLabel)`
  font-size: 14px;
`;

export const ButtonPriority = styled.TouchableOpacity<{ active?: boolean }>`
  height: 32px;
  min-width: 64px;
  background-color: ${({ theme, active }) =>
    active ? theme.highPriority : theme.background};
  justify-content: center;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  border: 1px solid
    ${({ theme, active }) => (active ? theme.highPriority : theme.text)};
  border-radius: 21px;
`;

export const LabelPriority = styled.Text<{ active?: boolean }>`
  font-size: 14px;
  color: ${({ theme, active }) => (active ? '#000' : theme.text)};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;
