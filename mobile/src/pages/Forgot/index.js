import React, { useState } from 'react';
import { Platform, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as colors from '../../styles/colors';
import welcome from '../../assets/welcome.png';

import Input from '../../Components/InputText';
import ButtonForm from '../../Components/ButtonForm';
import ButtonSecondary from '../../Components/ButtonSecondary';

import { Main, H1, Span, Text } from './styled';

export default function LoginPage() {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState('');

  return (
    <Main behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled>
      <H1>Recover your login</H1>
      <Span>Enter your registered account email</Span>

      <Input
        placeholder="Username@gmail.com"
        color={colors.inputTxt}
        value={email}
        setValue={setEmail}
      />

      <ButtonForm text="SEND" handlePress={() => console.log('enviou')} />

      <ButtonSecondary
        text="Back to"
        strong="Login"
        handlePress={() => navigate('login')}
      />
    </Main>
  );
}
