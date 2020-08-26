import React from 'react';
// import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';

import {
  Main,
  H1,
  Span,
  TravelsNavigate,
  H1Navigate,
  SpanNavigate,
  TravelsList,
  Figure,
} from './styled';
import UserIcon from '../../assets/user.png';

export default function DashboardPage() {
  // const { navigate } = useNavigation();

  return (
    <Main>
      <Image
        source={UserIcon}
        style={{ resizeMode: 'contain', width: '100%' }}
      />
      <H1>Tom G Johnson</H1>
      <Span>driveruser@gmail.com</Span>

      <TravelsNavigate>
        <TouchableOpacity>
          <H1Navigate>PENDING</H1Navigate>
          <SpanNavigate>04</SpanNavigate>
        </TouchableOpacity>

        <TouchableOpacity>
          <H1Navigate>TRAVELS</H1Navigate>
          <SpanNavigate>200</SpanNavigate>
        </TouchableOpacity>

        <TouchableOpacity>
          <H1Navigate>MONEY</H1Navigate>
          <SpanNavigate>2K</SpanNavigate>
        </TouchableOpacity>
      </TravelsNavigate>

      <TravelsList>
        <Figure />
      </TravelsList>
    </Main>
  );
}
