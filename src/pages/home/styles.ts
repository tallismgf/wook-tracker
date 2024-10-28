import styled from 'styled-components/native';
import { BaseContainer } from '../../common/styles/components';

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
