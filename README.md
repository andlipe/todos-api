# todos-api
## Qual objetivo do projeto
Esse projeto visa criar uma API Restful que disponibilize os endpoints para as operações CRUD em
uma lista de tarefas.

## Tecnologias Utilizadas

* Node.JS: Por estar mais familiarizado com JavaScript, escolhi node por poder trabalhar com uma tecnologia que estou acostumado, além de ser uma tecnologia otimizada para a criação de apis, trazendo velocidade para o projeto. 
* MongoDB: Escolhido por ser trabalhar muito bem junto ao Node.JS e por ser bom para aplicações sem muitos relacionamentos entre tabelas.

# Como utilizar a ferramenta

## Requisitos
- Docker e Docker Compose instalados na máquina.
### Windows e Mac
O docker pode ser baixado diretamente no [site oficial](https://www.docker.com/get-started).
### Distribuições Linux
É necessário fazer a instalação do Docker e do Docker Compose por serem pacotes separados.
O tutorial para instalação pode ser encontrado na documentação oficial.
* [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
* [Docker Compose](https://docs.docker.com/compose/install/)
## Como executar?
Precisamos copiar o arquivo de váriaveis de ambiente com o comando
> cp .env.example .env

Agora para subir o container vamos rodar o comando
> docker-compose up --build -d

Pronto o ambiente vai estar disponível na porta 3000 por padrão ou na porta setada no .env
# Como testar?

Listagem de tarefas - GET: http://localhost:3000/todos/

. Em caso de sucesso retorna todas tarefas já cadastradas no banco de dados, cada tarefa no formato JSON, contendo descrição, se foi concluida, a data de criação e a data de atualização.

Adicionar tarefas - POST: http://localhost:3000/todos/

. Adiciona uma tarefa ao banco de dados, sendo necessário inserir apenas o description. O Id é gerado automaticamente, o completed é adicionado por padrão false, createdAt e updatedAt são adicionado automaticamente pelo banco de dados.

Deletar uma tarefa por Id - DELETE: http://localhost:3000/todos/_id

. Remove a tarefa utilizando o Id que foi gerado automaticamente, utilizando o método DELETE.

Altera um item de uma tarefa por id - PATCH: http://localhost:3000/todos/_id 

. Altera na tarefa o campo enviado pelo body da requisição, utilizando o método PATCH.

Altera a tarefa por completo através do id- PUT: http://localhost:3000/todos/_id 

. Altera o recurso completo 

