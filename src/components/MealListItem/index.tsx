import { Container, Time, Separator, Name, SuccessSign } from './styles';

type Props = {
  time: string,
  name: string,
  isOnDiet: boolean,
}

export const MealListItem = ({ time, name, isOnDiet }: Props) => {
  return (
    <Container>
      <Time>{time}</Time>
      <Separator>|</Separator>
      <Name>{name}</Name>
      <SuccessSign isOnDiet={isOnDiet} />
    </Container>
  )
};
