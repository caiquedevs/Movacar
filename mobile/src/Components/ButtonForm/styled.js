import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';
import * as colors from '../../styles/colors';

export const Button = styled(RectButton)`
  width: 160px;
  height: 45px;
  margin-top: 30px;

  align-items: center;
  justify-content: center;

  background-color: ${colors.yellow};
  border-radius: 3px;
`;

export const TextButton = styled.Text`
  font-family: 'RussoOne_400Regular';
  font-size: 15px;
  line-height: 18px;
  color: ${colors.white};
`;
