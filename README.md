# BootCamp-Rockeseat-Semana1-M-dulo2
## Objetivo
Contar minha experiência a aprendizado durante o BootCamp em cada módulo e semana.

O foco desses arquivos é sobre:conteúdos teóricos(explicando métodos http por exemplo), técnologias usadas(dependencias, bibliotecas etc),comandos de instalação, estrutura dos arquivos(exemplo pasta models,controllers), arquivos de configurações(arquivo que configura o banco de dados da aplicação por exemplo) etc.

Detalhes sobre os códigos(o que uma tal função faz) ficaram comentadas no código
## Intrudução
Esse é o primeiro módulo, então preciso mostrar conceitos que foram passados antes
# Sobre o que se trata o módulo
Nessa parte foram mostrados conceitos básicos de node, ambiente de desemvolvimento, webservice(REST) e protocolo HTTP
# Instalação no Windows
O gerenciador de pacotes recomendado foi o choccolatey.
Para instalação segui os passos em https://chocolatey.org/install
# Yarn
O node por padrão vem com uma ferramenta que permite baixar bibliotecas de terceiros para a aplicação(também é possível fornecer), ela é chamada de npm.Entretanto, foi recomendado instalar o yarn.
# O que é node.js?
Ambiente de desemvolvimento para rodar javascript fora no navegador.Usado no servidor.

Basicamente ele é responsável pelo controle de rotas da aplicação e acesso ao banco de dados.

O node foi construido em cima da engine v8 do google chrome.

# Características do Node


# API REST
Baseado em requisições feitas pelo cliente respondendo com uma estrutura de dados geralmente em json.
# Métodos HTTP
GET POST PUT DELETE
# Conteúdo das requisições
Métodos, rotas, parâmetros de consulta, corpo e cabeçalho.
# Códigos HTTP
1xx informativo

2xx Sucesso

3xx Eedirecionamento

4xx Erro no cliente

5xx Erro no servidor

# Iniciando o projeto
Primeiramente foi dado o comando 'yarn init -y' em uma determinada pasta para início do projeto. Assim foi criada um arquivo chamado package.json. Ele é responsável por guardar as referências das dependências instaladas no projeto.
# Adicionando o express
yarn add express
# Executando o arquivo 
Utiliza o comando "node nomedoarquivo.js"
# Isomnia
Foi ultilizada essa ferramenta para fazer algumas requisições
# Nodemon
Ele faz com que não seja preciso ficar reeiniciando o servidor a cada mudança de código

Instalação: yarn add nodemon -D

Excecução: yarn nodemon nomearquivo.js

# Criando um script
No arquivo package.json, foi adicionando :
```
  "scripts": {
    "dev" :"nodemon index.js"
  },
```





