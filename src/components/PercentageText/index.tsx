import { ViewProps } from 'react-native';
import { Container, Title, Subtitle } from './styles';
import { i18n } from '@langs/i18n';

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
        {i18n.t('components.percentageText.subtitle')}
      </Subtitle>
    </Container>
)};
