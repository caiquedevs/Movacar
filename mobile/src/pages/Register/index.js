import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Main, H1, Span } from './styled';
import Input from '../../Components/InputText';
import ButtonForm from '../../Components/ButtonForm';
import ButtonSecondary from '../../Components/ButtonSecondary';
import * as colors from '../../styles/colors';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [passWord, setPassWord] = useState('');
  const { navigate } = useNavigation();

  return (
    <Main behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled>
      <H1>Let’s Get Started!</H1>
      <Span>Create an account to Movacar to get all features</Span>

      <Input
        placeholder="Name and Surname"
        color={colors.inputTxt}
        value={name}
        setValue={setName}
      />
      <Input
        placeholder="Email"
        color={colors.inputTxt}
        value={email}
        setValue={setEmail}
      />
      <Input
        placeholder="Phone"
        color={colors.inputTxt}
        value={phone}
        setValue={setPhone}
      />
      <Input
        placeholder="Cpf"
        color={colors.inputTxt}
        value={cpf}
        setValue={setCpf}
      />
      <Input
        placeholder="Password"
        color={colors.inputTxt}
        value={passWord}
        setValue={setPassWord}
      />

      <ButtonForm text="CREATE" onPress={() => console.log('registrou')} />
      <ButtonSecondary
        text="Already have an account? "
        strong="Login here"
        handlePress={() => navigate('login')}
      />
    </Main>
  );
}
