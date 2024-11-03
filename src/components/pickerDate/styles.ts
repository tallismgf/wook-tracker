import styled from 'styled-components/native';

export const ButtonShowDate = styled.TouchableOpacity`
  height: 32px;
  /* background-color: ${({ theme }) => theme.primary}; */
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 21px;
  justify-content: center;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
`;

export const LabelButton = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;
