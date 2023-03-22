import { TouchableOpacityProps } from 'react-native';
import { Feather } from "@expo/vector-icons";

import { Container, Title, ButtonTypeStyleProps, Icon } from './styles'
import { useTheme } from 'styled-components/native';

type Props = TouchableOpacityProps & {
  title: string,
  type?: ButtonTypeStyleProps,
  icon?: keyof typeof Feather.glyphMap;
}

export const Button = ({ title, type = 'PRIMARY', icon, ...rest }: Props) => {
  const theme = useTheme();
  return (
    <Container
      type={type}
      {...rest}
    >
      {icon && (
        <Icon
          size={20}
          color={type === "PRIMARY" ? theme.COLORS.GRAY_6 : theme.COLORS.GRAY_2}
          name={icon}
        />
      )}
      <Title
        type={type}
      >
        {title}
      </Title>
    </Container>
  )
}
