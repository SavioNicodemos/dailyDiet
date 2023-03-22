import { ViewProps } from 'react-native';
import { Container, Title, Subtitle } from './styles';

type Props = ViewProps & {
  percentageValue: number,
}

export const PercentageText = ({ percentageValue, ...rest }: Props) => {
  const shownValue = percentageValue.toFixed(2);
  return (
    <Container {...rest}>
      <Title>
        {shownValue}%
      </Title>
      <Subtitle>
        das refeições dentro da dieta
      </Subtitle>
    </Container>
)};
