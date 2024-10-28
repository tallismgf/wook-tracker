import styled from 'styled-components/native';

export const BaseContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

export const BaseText = styled.Text`
  color: ${({ theme }) => theme.text};
`;
