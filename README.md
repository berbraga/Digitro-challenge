Aqui está a documentação em formato Markdown para o seu projeto:  

 
# Projeto Chat de Chamados

Este é um projeto de sistema de chat para gerenciamento de chamados. O projeto utiliza React, Redux e Socket.IO para a comunicação em tempo real.  

O projeto está hospedado no servidor Firebase e pode ser acessado na seguinte URL:  
[https://challenge-bernardo.web.app/](https://challenge-bernardo.web.app/)

---

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão recomendada: 16 ou superior)
- [Yarn](https://yarnpkg.com/) (gerenciador de pacotes)

---

## Rodando o projeto localmente

Siga as etapas abaixo para rodar o projeto em sua máquina local:

### 1. Clonar o repositório

```bash
git clone <URL-DO-REPOSITORIO>
cd <PASTA-DO-REPOSITORIO>
```

### 2. Instalar as dependências

Certifique-se de estar na pasta raiz do projeto e execute o comando:

```bash
yarn install
```

### 3. Configurar o ambiente

O projeto utiliza variáveis de ambiente para configuração. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes configurações, se necessário:

```
REACT_APP_SOCKET_URL=http://dev.digitro.com
REACT_APP_SOCKET_PATH=/callcontrol
```

### 4. Rodar o servidor local

Para iniciar o servidor de desenvolvimento, execute:

```bash
yarn dev
```

O projeto estará disponível em:  
[http://localhost:3000](http://localhost:3000)

---

## Scripts disponíveis

- **`yarn dev`**: Inicia o servidor de desenvolvimento.
- **`yarn build`**: Cria uma versão de produção na pasta `dist`.
- **`yarn lint`**: Executa a verificação do código com ESLint.

---

## Hospedagem no Firebase

O projeto está configurado para ser hospedado no Firebase. A URL de produção é:  
[https://challenge-bernardo.web.app/](https://challenge-bernardo.web.app/)

Caso precise fazer deploy novamente, siga os passos abaixo:

### 1. Instalar a CLI do Firebase (caso ainda não tenha instalado)

```bash
npm install -g firebase-tools
```

### 2. Fazer login no Firebase

```bash
firebase login
```

### 3. Fazer deploy do projeto

Certifique-se de que o projeto foi construído com o comando `yarn build` e então execute:

```bash
firebase deploy
```

---

## Tecnologias utilizadas

- **React**: Biblioteca para construção de interfaces.
- **Redux**: Gerenciamento de estado global.
- **Socket.IO**: Comunicação em tempo real.
- **TailwindCSS**: Estilização do projeto.
- **Firebase Hosting**: Hospedagem do projeto.

---

## Contato

Caso tenha dúvidas ou sugestões, entre em contato com o desenvolvedor:
**berbraga**
