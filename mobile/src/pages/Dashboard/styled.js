import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Main = styled.KeyboardAvoidingView`
  padding-top: 60px;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.black};
`;

export const H1 = styled.Text`
  margin-top: 20px;
  margin-bottom: 7px;

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

export const TravelsNavigate = styled.View`
  width: 100%;
  max-width: 300px;
  height: 85px;
  background-color: #33333f;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const H1Navigate = styled.Text`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.white};
  font-family: 'Roboto_700Bold';
`;

export const SpanNavigate = styled.Text`
  font-size: 21px;
  line-height: 25px;
  color: ${colors.white};
  font-family: 'Roboto_400Regular';
`;

export const TravelsList = styled.View`
  width: 100%;
  max-width: 300px;
  border-bottom-width: 1px;
  border-bottom-color: #404047;
`;

export const Figure = styled.View`
  width: 47px;
  height: 50px;
  background: #2c2c37;
  /* border-radius: 0px 3px 3px 0px; */
`;
