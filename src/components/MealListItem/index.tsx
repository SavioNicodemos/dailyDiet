import { TouchableOpacityProps } from 'react-native';
import { Container, Time, Separator, Name, SuccessSign } from './styles';

type Props = TouchableOpacityProps & {
  time: string,
  name: string,
  isOnDiet: boolean,
}

export const MealListItem = ({ time, name, isOnDiet, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Time>{time}</Time>
      <Separator>|</Separator>
      <Name>{name}</Name>
      <SuccessSign isOnDiet={isOnDiet} />
    </Container>
  )
};
