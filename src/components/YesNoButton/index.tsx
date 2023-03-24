import { TouchableOpacityProps } from 'react-native';
import { Container, Indicator, Title, ColorSchemeProps } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isSelected?: boolean;
  type?: ColorSchemeProps;
}

export const YesNoButton = ({ title, isSelected = false, type = 'PRIMARY', ...rest }: Props) => {
  return (
    <Container isSelected={isSelected} type={type} {...rest}>
      <Indicator type={type} />
      <Title>
        {title}
      </Title>
    </Container>
  )
};
