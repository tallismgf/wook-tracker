import { TouchableOpacityProps } from 'react-native';
import { Container, Label } from './styles';

type Props = {
  label: string;
} & TouchableOpacityProps;

export function Button({ label, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Label>{label}</Label>
    </Container>
  );
}
