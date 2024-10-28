/* eslint-disable react-native/no-inline-styles */
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Container } from './styles';
import { Input } from '../../components/input';

export function CreateTask() {
  const disabledKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    // <KeyboardAvoidingView
    //   style={{ flex: 1 }}
    //   behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    //   keyboardVerticalOffset={40}
    // >
    <TouchableWithoutFeedback onPress={disabledKeyboard}>
      <Container contentContainerStyle={{ gap: 24 }}>
        <Input placeholder="Titulo" />

        <Input placeholder="Descrição" multiline />
      </Container>
    </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  );
}
