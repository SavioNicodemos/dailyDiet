import { TextInput, TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container, TextInputStyled, Title } from './styles'

type Props = TextInputProps & {
  title: string;
  inputRef?: React.RefObject<TextInput>;
}

export function Input({ inputRef, multiline = false, title, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container isMultiline={multiline}>
      <Title>
        {title}
      </Title>
      <TextInputStyled
        ref={inputRef}
        multiline={multiline}
        isMultiline={multiline}
        textAlignVertical={multiline ? "top" : "center"}
        placeholderTextColor={COLORS.GRAY_3}
        {...rest}
      />
    </Container>
  )
}
