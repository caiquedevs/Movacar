import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Main = styled.View`
  flex: 1;
  padding: 60px 0;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
`;

export const Text = styled.Text`
  font-family: 'Roboto_400Regular';
`;

export const H1 = styled.Text`
  width: 145px;
  margin-bottom: 10px;

  font-family: 'RussoOne_400Regular';
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #1a1b1d;
`;

export const Span = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 13px;
  line-height: 15px;
  text-align: center;

  color: #888888;
`;

export const ButtonLogin = styled(RectButton)`
  width: 303px;
  height: 45px;
  margin: 5px 0;

  align-items: center;
  justify-content: center;

  background: #f3982f;
  border-radius: 10px;
`;

export const ButtonCreateLogin = styled(ButtonLogin)`
  background: #f4f5f7;
`;
