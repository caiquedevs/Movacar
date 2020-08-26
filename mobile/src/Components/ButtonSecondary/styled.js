import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const View = styled.View`
  margin-top: 55px;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 15px;
  font-family: 'Roboto_400Regular';
  color: ${colors.silver};
`;

export const Strong = styled.Text`
  margin-left: 7px;
  font-family: 'Roboto_700Bold';
  font-size: 16px;
  color: ${colors.yellow};
  line-height: 18px;
`;
