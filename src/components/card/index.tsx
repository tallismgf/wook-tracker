import { Container, Deadline, Title } from './styles';

type CardProps = {
  title: string;
  deadline: string;
};

export function Card({ title, deadline }: CardProps) {
  return (
    <Container>
      <Title numberOfLines={1}>{title}</Title>
      <Deadline>{deadline}</Deadline>
    </Container>
  );
}
