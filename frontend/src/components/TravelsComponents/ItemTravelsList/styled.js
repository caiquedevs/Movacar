import styled from 'styled-components';

export const UlTravels = styled.ul`
  width: 100%;
  height: calc(100vh - 60px);
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: auto;
`;

export const LiTravels = styled.li`
  width: 100%;

  h1 {
    font-weight: 500;
    font-size: 16px;
    color: #6e6d6e;
    transition: 0.2s all;
  }

  span {
    width: 100%;
    max-width: 150px;
    overflow: hidden;
    text-overflow: Ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    font-weight: 500;
    font-size: 13px;
    transition: 0.2s all;
  }
`;

export const HeaderLi = styled.header`
  max-width: 843px;
  width: 100%;
  min-height: 47px;
  margin: 4px 0;
  padding: 0 21px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #33333f;
  border-radius: 3px;
  cursor: default;

  :hover h1.pending {
    color: #ffe600;
  }

  :hover h1.processing {
    color: #f9c71b;
  }

  :hover h1.completed {
    color: #4cd137;
  }

  :hover span {
    color: #ffffff;
  }

  label.iconArrow {
    display: flex;
    :hover svg path {
      fill: #ffffff;
    }
  }

  svg {
    color: #6e6d6e;

    :hover {
      color: red;
      cursor: pointer;
    }
  }

  div.infoGroup {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    span {
      margin-right: 30px;
    }

    h1 {
      margin-left: 30px;
    }
  }
`;

export const BodyLi = styled.div`
  input {
    appearance: none;
    display: none;
    :checked + section {
      height: 100px;
      opacity: 1;
      display: flex;
    }
  }

  section {
    width: 100%;
    max-width: 843px;
    height: 0px;
    padding: 0 30px;
    margin-top: -3px;

    display: none;
    align-items: center;
    justify-content: space-between;

    background: #33333f;
    border-radius: 3px;

    opacity: 0;
    transition: 0.2s all;

    div.infoGroup {
      span {
        text-transform: capitalize;
      }
      h1 {
        width: auto;
        margin: 0 0 7px 0;
        padding: 0;
      }
    }
  }
`;
