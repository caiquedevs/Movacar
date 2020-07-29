import styled from 'styled-components';

export const FilterTravels = styled.ul`
  width: 100%;
  margin: 30px 0 15px 0;
  padding: 0px 35px;
  display: flex;

  li {
    width: auto;
    margin-right: 15px;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;

    color: #c2c1c3;

    input {
      appearance: none;
      :checked + label {
        border-bottom: 2px solid #f9c71b;
      }
    }

    label {
      :hover {
        cursor: pointer;
      }
      height: 21px;
      display: inline-grid;
    }
  }
`;
