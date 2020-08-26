import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Main = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.black};
`;

export const Text = styled.Text`
  margin-top: 15px;
  font-size: 15px;
  font-family: 'Roboto_400Regular';
  color: ${colors.silver};
`;

export const H1 = styled.Text`
  margin-bottom: 10px;

  font-family: 'RussoOne_400Regular';
  font-size: 23px;
  line-height: 30px;
  text-align: center;
  color: ${colors.white};
`;

export const Span = styled.Text`
  margin-bottom: 35px;
  font-family: 'Roboto_400Regular';
  font-size: 15px;
  line-height: 15px;
  text-align: center;

  color: ${colors.silver};
`;
