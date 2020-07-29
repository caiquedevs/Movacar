import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
   /* largura do scroll vertical e horizonal*/
   ::-webkit-scrollbar { width: 5px; height: 5px; }
   /* Fundo do scroll*/
   ::-webkit-scrollbar-track { background: transparent; }
   /* Cor do scroll*/
   ::-webkit-scrollbar-thumb { background: silver; }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    position: relative;
    font-family: roboto, sans-serif;
    list-style: none;
  }
  .toast-container {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .Toastify__toast{
    width: 100%;
    max-width: 325px;
    margin-top: 7px;
    margin-right: 7px;
  }

  body{ overflow: auto }

  @keyframes effect {
    from {
      opacity: 0;
      transform: translate3d(0, 60px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  div.toastify{
    display: flex;
    align-items: center;

    svg{ margin: 0 10px 0 10px;}
  }

  section.active {
    visibility: visible;
    opacity: 1;
  }

  h1 { color: #423F52 }
  span { color: #6E6D6E }
  small { color: #A2A1A7 }

    input.default{
      width: 100%;
      max-width: 300px;
      height: 45px;
      padding: 0px 17px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #eeeeee;
      border: 1px solid #e1e1e1;
      border-radius: 3px;
      font-size: 16px;

      ::-webkit-input-placeholder {
        font-size: 16px;
      }
    }

  button.default {
    width: auto;
    height: auto;
    background: none;
    border: none;
  }
  button.primary {
    width: 100%;
    max-width: 300px;
    height: 45px;
    padding: 0 17px;
    border: none;
    background-color: #F9C71B;
    font-size: 15px;
    font-weight: bold;
    color: #ffffff;
    transition: 0.3s all;
  }

  button:hover{
    cursor: pointer;
    opacity: 0.8;
  }

`;

export default GlobalStyle;
