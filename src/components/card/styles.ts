import styled from 'styled-components/native';
import { BaseText } from '../../common/styles/components';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.lightBackground};
  padding: 4px 8px;
  border-radius: 18px;
  height: 64px;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(BaseText)`
  font-size: 20px;
`;

export const Deadline = styled(BaseText)`
  font-size: 14px;
`;
