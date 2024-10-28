import styled from 'styled-components/native';
import { BaseContainer, BaseText } from '../../common/styles/components';

export const Container = styled(BaseContainer)`
  align-items: center;
  justify-content: center;
  gap: 48px;
`;

export const ContainerImage = styled.Image`
  width: 240px;
  height: 240px;
  border-radius: 120px;
`;

export const RowText = styled.View`
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const Title = styled(BaseText)`
  font-size: 32px;
  letter-spacing: 1px;
  font-weight: 700;
`;

export const SubTitle = styled(BaseText)`
  font-size: 16px;
`;

export const CircleButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.primary};
  height: 48px;
  width: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
`;
