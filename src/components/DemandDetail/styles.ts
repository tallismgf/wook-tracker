import styled from 'styled-components/native';
import { BaseText } from '../../common/styles/components';

export const Container = styled.View`
  flex: 1;
  flex-direction: column-reverse;
`;

export const Card = styled.View`
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  padding: 12px;
  background-color: ${({ theme }) => theme.lightBackground};
`;

export const Title = styled(BaseText)`
  font-size: 24px;
  font-weight: 500;
`;

export const Description = styled(BaseText)``;

export const Row = styled.View`
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  /* flex-direction: row; */
  justify-content: space-between;
`;

export const Item = styled.View`
  flex-direction: row;
`;

export const Label = styled(BaseText)`
  font-size: 16px;
`;

export const Priority = styled.View<{ highPriority: boolean }>`
  border-radius: 12px;
  padding: 2px 8px;
  background-color: ${({ highPriority }) => (highPriority ? '#F44336' : null)};
`;
