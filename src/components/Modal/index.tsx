import { Button } from '@components/Button';
import { Modal as ModalRN } from 'react-native';
import { Body, ButtonsContainer, Container, Message } from './styles';
import { i18n } from '@langs/i18n';

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
            <Button title={i18n.t('components.modal.cancel')} type='SECONDARY' onPress={handleCancelPress} />
            <Button title={i18n.t('components.modal.confirm')} type='PRIMARY' onPress={handleConfirmPress} />
          </ButtonsContainer>
        </Body>
      </Container>
    </ModalRN>
  );
};
