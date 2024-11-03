import styled from 'styled-components/native';
import { BaseText } from '../../common/styles/components';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 42px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 21px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled(BaseText)`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;
