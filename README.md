# Pokédex Web App

Esta é uma aplicação web de uma Pokédex simples, desenvolvida em React. A Pokédex é uma ferramenta que permite aos usuários visualizar informações sobre diferentes Pokémon, incluindo seus nomes, tipos e imagens.

## Estrutura da Aplicação

A aplicação é composta por vários componentes React, cada um com sua funcionalidade específica. Aqui está uma visão geral dos principais componentes:

### `App.js`

Este é o arquivo de entrada da aplicação que renderiza a página inicial. Ele importa e exibe o componente `Home`.

### `Home.js`

O componente `Home` é a página inicial da aplicação. Ele busca informações sobre Pokémon da API PokeAPI e exibe uma lista de cartões de Pokémon na interface do usuário. Os principais recursos deste componente incluem:

- Uso de Axios para fazer várias solicitações à API PokeAPI para obter informações sobre os Pokémon.
- Um componente `Navbar` que inclui uma barra de pesquisa para filtrar Pokémon por nome.
- Uma grade de `PokemonCard` que exibe informações sobre cada Pokémon retornado pela API.

### `Navbar.js`

O componente `Navbar` representa a barra de navegação da aplicação. Ele inclui um logotipo do Pokémon e uma barra de pesquisa que permite ao usuário filtrar Pokémon por nome.

### `PokemonCard.js`

O componente `PokemonCard` é usado para exibir informações sobre um Pokémon específico em um cartão. Ele mostra o nome do Pokémon, sua imagem e seus tipos. Além disso, ele possui animações de hover para interação do usuário.

### Testes

Os testes são implementados no arquivo `App.test.js`. Eles verificam se o componente `App` é renderizado sem erros.

## Como Executar a Aplicação

Para executar a aplicação localmente, siga estas etapas:

1. Clone o repositório para sua máquina:

   ```bash
   git clone https://github.com/MVHespanholo/Pokedex
Navegue para o diretório do projeto:

bash
cd sua-pokedex
Instale as dependências usando npm ou yarn:

bash
npm install
ou

bash
yarn install
Inicie a aplicação:

bash
npm start
ou

bash
yarn start
A aplicação estará disponível no seu navegador em http://localhost:3000.

Testes
Para executar os testes da aplicação, utilize o seguinte comando:

bash
npm test
Contribuição
Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga estas etapas:

Faça um fork do repositório.
Crie um branch com suas alterações: git checkout -b minha-nova-funcionalidade.
Faça commit de suas alterações: git commit -m 'Adicionei uma nova funcionalidade'.
Envie suas alterações para o repositório fork: git push origin minha-nova-funcionalidade.
Abra um pull request para revisão.
Licença
Este projeto está licenciado sob a MIT License.

Lembre-se de substituir "seurepositório/sua-pokedex" pelo caminho correto do seu repositório no GitHub e personalize o conteúdo conforme necessário. Este README.md serve como uma documentação básica para a sua aplicação Pokédex.



https://pokedex-ten-rouge.vercel.app/
