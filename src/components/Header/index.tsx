import { Feather } from "@expo/vector-icons";
import { useMemo } from "react";
import { TouchableOpacity, ViewProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container, Title } from './styles';

type BackButtonColors = 'DEFAULT' | 'RED' | 'GREEN';

type Props = ViewProps & {
  backButtonColor?: BackButtonColors,
  title?: string,
  noMargin?: boolean,
  onBackPress?: () => void,
}

export const Header = ({ backButtonColor = 'DEFAULT', title = "", noMargin = false, onBackPress = (() => { }), ...rest }: Props) => {
  const theme = useTheme();

  const colorOfIcon = useMemo(() => {
    let color;
    if (backButtonColor === 'DEFAULT') color = theme.COLORS.GRAY_2;
    if (backButtonColor === 'GREEN') color = theme.COLORS.GREEN_DARK;
    if (backButtonColor === 'RED') color = theme.COLORS.RED_DARK;
    return color;
  }, [backButtonColor]);

  return (
    <Container noMargin={noMargin} {...rest}>
      <TouchableOpacity onPress={onBackPress} style={{ zIndex: 1 }}>
        <Feather name="arrow-left" size={32} color={colorOfIcon} />
      </TouchableOpacity>
      <Title>
        {title}
      </Title>
    </Container>
  )
};
