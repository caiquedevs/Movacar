<h1 align="center">
    <img alt="Movacar" title="Movacar" src="https://github.com/caiquedevs/Movacar/blob/master/github/logo.svg" width="220px" />
</h1>

<p align="center">
  <a href="#-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>
</p>

<br>

<p align="center">
  <img alt="Movacar" src="https://github.com/caiquedevs/Movacar/blob/master/github/template.png" width="100%">
  <img src="https://github.com/caiquedevs/Movacar/blob/master/github/demo.gif" width="100%" />
</p>

## 🚀 Tecnologias

Esse projeto esta sendo desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
  - Express
  - Jsonwebtoken
  - Knex
  - Sqlite3
  - Eslint
  - Métodos http: get, post, delete
- [React](https://reactjs.org)
  - Redux
  - Redux Persist
  - Redux Saga
  - React-icons
  - React-input-mask
  - React-toastify
  - Styled-Components
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## 💻 Projeto

A movacar é um sistema web e mobile onde o usuário pode cadastrar motoristas, acompanhar e solicitar viagens para eles.

## 🔖 Layout

Você pode visualizar o layout do projeto no formato através [desse link](https://www.figma.com/file/IsrjAmtYzLFsHsvyZu0JUT/MOVACAR?node-id=293%3A37). Lembrando que você irá precisar ter uma conta no [Figma](http://figma.com/).

## :information_source: Como usar

Para clonar e executar este aplicativo, você precisará [Git] (https://git-scm.com), [Node.js] [nodejs] + [Yarn] [yarn] instalado no seu computador.

Na sua linha de comando:

### Install API 

```bash
# Clonar este repositório
$ git clone https://github.com/caiquedevs/Movacar.git

# Entre no repositório
$ cd movacar/backend

# Instalar dependências
$ yarn install

# Executar migrações
$ yarn knex:migrate

# Iniciar servidor
$ yarn dev

# Em execução na porta 3333
```

### Instalar Front-end

```bash
# Clonar este repositório
$ git clone https://github.com/caiquedevs/Movacar.git

# Entre no repositório
$ cd movacar/frontend

# Instalar dependências
$ yarn install

# Iniciar
$ yarn start

# executando na porta 3000
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ por Caiquedevs
