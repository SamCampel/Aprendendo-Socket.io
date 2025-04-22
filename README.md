# Socket.io

Este é um exemplo de aplicação utilizando **Express**, **Socket.io** e **EJS** para criar uma interface interativa em tempo real.

## Estrutura do Projeto
### Arquivos principais:

- **`index.js`**: Configura o servidor Express e Socket.io.
- **`views/index.ejs`**: Página HTML renderizada pelo servidor com integração de Socket.io.
- **`package.json`**: Lista as dependências do projeto.

## Pré-requisitos
- Node.js instalado na máquina.

## Instalação

1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   cd Socketio
   ```

2. Instale as dependências:
- npm install

## Uso
1. Inicie o servidor:
- node index.js

2. Acesse a aplicação no navegador:
http://localhost:3000

## Funcionalidades
- Entrada de texto em tempo real: O usuário pode digitar uma palavra no campo de texto, e o servidor processa e retorna uma resposta.
- Comunicação bidirecional: Utiliza Socket.io para enviar e receber mensagens entre o cliente e o servidor.

## Scripts
- enviar(): Função no cliente que emite o evento palavra para o servidor com o valor do campo de texto.

##Servidor:
- Escuta eventos como mensagem e palavra.
- Emite o evento resultado com a resposta processada.

## Dependências
- Express: Framework para criar o servidor web.
- Socket.io: Biblioteca para comunicação em tempo real.
- EJS: Template engine para renderizar HTML.

## Exemplo de Fluxo
1. O cliente digita uma palavra no campo de texto.
2. O evento palavra é enviado ao servidor.
3. O servidor processa a palavra e retorna uma resposta com o evento resultado.
4. A resposta é exibida no parágrafo da página.

## Licença
Este projeto é livre para uso e modificação.
