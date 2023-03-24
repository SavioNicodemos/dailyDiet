import { Button } from '@components/Button';
import { Modal as ModalRN, Text, TouchableOpacity, View } from 'react-native';
import { Body, ButtonsContainer, Container, Message } from './styles';

type Props = {
  visible: boolean;
  message: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  onClose?: () => void;
};

export const Modal = ({
  visible,
  message,
  onCancel = () => { },
  onConfirm = () => { },
  onClose = () => { }
}: Props) => {

  function handleCancelPress() {
    onCancel();
    onClose();
  }

  function handleConfirmPress() {
    onConfirm();
    onClose();
  }
  return (
    <ModalRN animationType='fade' transparent={true} visible={visible}>
      <Container>
        <Body>
          <Message>{message}</Message>
          <ButtonsContainer>
            <Button title='Cancelar' type='SECONDARY' onPress={handleCancelPress} />
            <Button title='Sim, excluir' type='PRIMARY' onPress={handleConfirmPress} />
          </ButtonsContainer>
        </Body>
      </Container>
    </ModalRN>
  );
};
