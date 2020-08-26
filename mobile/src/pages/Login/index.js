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
  const [passWord, setPassWord] = useState('');

  return (
    <Main behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled>
      <Image
        source={welcome}
        style={{ resizeMode: 'contain', width: '100%' }}
      />

      <H1>Welcome back</H1>
      <Span>Enter your Movacar driver account</Span>

      <Input
        placeholder="Username@gmail.com"
        color={colors.inputTxt}
        value={email}
        setValue={setEmail}
      />

      <Input
        placeholder="Password"
        color={colors.inputTxt}
        value={passWord}
        setValue={setPassWord}
      />

      <ButtonForm text="LOGIN" handlePress={() => navigate('dashboard')} />

      <ButtonSecondary
        text="Don’t have an account?"
        strong="Sign Up"
        handlePress={() => navigate('register')}
      />

      <TouchableOpacity onPress={() => navigate('forgot')}>
        <Text>Forgot your login?</Text>
      </TouchableOpacity>
    </Main>
  );
}
