import { Container, Description, Value } from './styles';

type Props = {
  value: number | string,
  description: string,
  type?: 'DEFAULT' | 'GREEN' | 'RED',
}

export const StatisticsCard = ({ value, description, type = 'DEFAULT' }: Props) => {
  return (
    <Container type={type}>
      <Value>
        {value}
      </Value>
      <Description>
        {description}
      </Description>
    </Container>
  )
};
