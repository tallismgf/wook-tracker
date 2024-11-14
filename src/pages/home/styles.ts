import styled from 'styled-components/native';
import { BaseContainer, BaseText } from '../../common/styles/components';

export const Container = styled(BaseContainer)`
  padding: 24px;
  gap: 24px;
`;

export const AddButton = styled.TouchableOpacity`
  position: absolute;
  right: 24px;
  bottom: 48px;
  background-color: ${({ theme }) => theme.primary};
  width: 64px;
  height: 64px;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
`;

export const RowFilters = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonFilter = styled.TouchableOpacity<{ active?: boolean }>`
  width: 30%;
  min-height: 28px;
  border-radius: 12px;
  border: 1px solid ${({ active }) => (active ? '#1565c0' : '#fff')};
  background-color: ${({ active, theme }) =>
    active ? '#1565c0' : theme.background};
  padding: 2px 6px;
  align-items: center;
`;

export const LabelFilter = styled(BaseText)``;
