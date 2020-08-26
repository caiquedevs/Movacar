import React from 'react';
import { Button, TextButton } from './styled';

export default function ButtonLoginComponent({ handlePress, text }) {
  return (
    <Button onPress={handlePress}>
      <TextButton>{text}</TextButton>
    </Button>
  );
}
