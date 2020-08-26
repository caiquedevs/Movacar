import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Input = styled.TextInput`
  width: 300px;
  height: 45px;
  margin-bottom: 10px;
  padding: 0 15px;

  background-color: ${colors.inputBk};
  color: #f3982f;
  border-radius: 3px;
  border: ${(props) => (props.statusOnFocus ? '2px solid #F3982F' : '0px')};
`;
