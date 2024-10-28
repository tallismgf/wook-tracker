import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 42px;
  background-color: ${({ theme }) => theme.lightBackground};
  border-radius: 21px;
  padding-left: 8px;
`;

export const TextInput = styled.TextInput`
  color: ${({ theme }) => theme.text};
`;

export const ContainerIcon = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 10px;
`;
