import { Container, Deadline, Title } from './styles';

type CardProps = {
  title: string;
  deadline: string;
  onPressCard: () => void;
};

export function Card({ title, deadline, onPressCard }: CardProps) {
  return (
    <Container onPress={onPressCard}>
      <Title numberOfLines={1}>{title}</Title>
      <Deadline>{deadline}</Deadline>
    </Container>
  );
}
