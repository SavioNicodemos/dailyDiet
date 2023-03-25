import { useState, useEffect } from 'react';

import { YesNoButton } from '@components/YesNoButton';
import { ButtonsContainer, Container, Title } from './styles';

type ColorSchemes = 'PRIMARY' | 'SECONDARY';

type Props = {
  title: string;
  buttonTitles: [string, string];
  buttonTypes?: [ColorSchemes, ColorSchemes];
  returnValues?: [boolean, boolean];
  onChange?: (value: boolean) => void;
  defaultValue?: boolean;
}

export const IsOnDietToggle = ({
  title,
  buttonTitles = ['', ''],
  buttonTypes = ['PRIMARY', 'SECONDARY'],
  onChange = () => { },
  returnValues = [true, false],
  defaultValue
}: Props) => {
  const [selectedButton, setSelectedButton] = useState('');

  function handleSelectButton(button: string, index: number) {
    setSelectedButton(button);
    onChange(returnValues[index]);
  };

  useEffect(() => {
    if (!typeof Boolean) return;
    const index = returnValues.findIndex(item => item === defaultValue);
    setSelectedButton(buttonTitles[index]);
  }, [defaultValue]);

  return (
    <Container>
      <Title>
        {title}
      </Title>

      <ButtonsContainer>
        {buttonTitles ? buttonTitles.map((title, index) => (
          <YesNoButton
            key={index}
            title={title}
            onPress={() => handleSelectButton(title, index)}
            type={buttonTypes[index]}
            isSelected={selectedButton === title}
          />
        )) : null}
      </ButtonsContainer>
    </Container>
  )
};
