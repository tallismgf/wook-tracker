import styled from 'styled-components/native';

export const Container = styled.View<{ multiline?: boolean }>`
  width: 100%;
  height: ${({ multiline }) => (multiline ? '84px' : '42px')};
  background-color: ${({ theme }) => theme.lightBackground};
  border-radius: 21px;
  padding-left: 8px;
`;

export const TextInput = styled.TextInput`
  color: ${({ theme }) => theme.text};
`;
