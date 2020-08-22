import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Main, Text, H1, Span, ButtonLogin, ButtonCreateLogin } from './styled';
import welcome from '../../assets/welcome.png';

export default function MainPage() {
  const { navigate } = useNavigation();

  const handleNavigateToRegister = () => {
    navigate('Register');
  };

  return (
    <Main>
      <View>
        <H1>Welcome to Movacar</H1>
        <Span>Choose an option below</Span>
      </View>

      <Image
        source={welcome}
        style={{ resizeMode: 'contain', width: '100%' }}
      />

      <View>
        <ButtonLogin>
          <Text style={{ color: '#ffffff' }}>Login</Text>
        </ButtonLogin>

        <ButtonCreateLogin onPress={handleNavigateToRegister}>
          <Text>Create your login</Text>
        </ButtonCreateLogin>
      </View>
    </Main>
  );
}
