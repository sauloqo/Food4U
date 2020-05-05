# Food4U

Projeto baseado em um rede social, na qual os usuários podem dividir informações relevantes sobre comidas e receitas que tenham experimentado.

## Stack Back-end

O Back-end web desse projeto segue uma arquitetura em camadas simples;

1. Presentation: responsável pela comunicação com agentes externos (como o Frontend).
2. Data: responsável pela comunicação direta com o banco de dados.
3. Business: responsável pela lógica de negócio. Por fim, ressalta-se que a comunicação da camada Data e a Business é feita através de interfaces denominadas Gateway, para possibilitar os testes unitários desta última camada (inversão de dependências).

## Linguagens e serviços utilizadas Back-end

Typescript, Serviços AWS (Lambda e API Gateway), Express, Bcryptjs e JWT, banco de dados mysql, gerenciadores de pacotes do Nodejs: yarn e npm.

## Sobre

Segundo projeto de backend feito durante o curso de Web Full Stack. Criado para testar uma API feita por nós alunos. Nele é possível criar um usuário, fazer login, criar uma receita, ver as informações do próprio usuário, seguir outro usuário, ver o seu feed e editar nome, email e data de nascimento do usuário logado.

## Instruções para rodar

Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em sua máquina, basta abrir o terminal e navegar até o repositório clonado e rodar:

1. npm install ou yarn para instalar todas as dependências;
2. npm run start ou yarn start para rodar localmente o projeto
3. npm run build ou yarn build para gerar uma versão estática do projeto (que ficará na pasta build)

## Links

AWS API-Gateway: https://kiui7ekyr0.execute-api.us-east-1.amazonaws.com/V1

Documentação do Postman: https://documenter.getpostman.com/view/9731752/Szmb6zY2?version=latest#intro

## Contato

Nome: Saulo Quaresma Oliveira  <br />
Linkedin: https://www.linkedin.com/in/saulo-quaresma-oliveira-843b3293/  <br />
Email: sauloquaresma@gmail.com  <br />
Telefone: (48) 98490-8951
