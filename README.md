# todos-api
## Qual objetivo do projeto
Esse projeto visa criar uma API Restful que disponibilize os endpoints para as operações CRUD em
uma lista de tarefas.

## Tecnologias Utilizadas

* Node.JS: Por estar mais familiarizado com JavaScript, escolhi node por poder trabalhar com uma tecnologia que estou acostumado, além de ser uma tecnologia otimizada para a criação de apis já que possui flexibilidade pela quantidade de pacotes que podem ser utilizados e leveza por não exigir muitos recursos.
* MongoDB: Escolhido por trabalhar bem junto ao Node.JS pelos dados poderem ser salvos em JSON e por ser bom para aplicações sem muitos relacionamentos entre tabelas.


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
Clone esse repositório
> git clone https://github.com/andlipe/todos-api.git

Precisamos copiar o arquivo de váriaveis de ambiente com o comando
> cp .env.example .env

Agora para subir o container vamos rodar o comando
> docker-compose up --build -d

Pronto o ambiente vai estar disponível na porta 3000 por padrão ou na porta setada no .env
# Como testar?

#### Listagem de tarefas - GET: http://localhost:3000/todos/

 Em caso de sucesso retorna todas tarefas já cadastradas no banco de dados, cada tarefa no formato JSON, contendo descrição, se foi concluida, a data de criação e a data de atualização.  
 Caso seja passado a query "page" e o número da página, ele trará uma páginação de 5 em 5 tarefas.
 > http://localhost:3000/todos/?page=1

#### Adicionar tarefas - POST: http://localhost:3000/todos/

 Adiciona uma tarefa ao banco de dados, sendo necessário inserir apenas o description. O Id é gerado automaticamente, o completed é adicionado por padrão false, createdAt e updatedAt são adicionado automaticamente pelo banco de dados.  
 Em caso de sucesso retorna um status 201 - Created, com o json da nova tarefa criada.
   > {  
 > "_id": "5e7f2aa938648a06ab0235c2",  
 > "description": "PAGINA 4",  
 > "completed": false,  
 > "createdAt": "2020-03-28T10:44:57.133Z",  
 > "updatedAt": "2020-03-28T10:44:57.133Z",  
 > "__v": 0  
> }  

Em caso de erro retornará um status 400 informando qual erro gerado.  
> {
>   "statusCode": 400,  
>   "error": "Bad Request",  
>   "message": "\"description\" length must be at least 3 characters long",  
>   "validation": {  
>     "source": "body",  
>     "keys": [  
>       "description"  
>     ]  
>   }  
> }  

#### Deletar uma tarefa por Id - DELETE: http://localhost:3000/todos/_id

 Remove a tarefa utilizando a variável _id que foi gerado automaticamente, utilizando o método DELETE.  
 Em caso de sucesso retorna um 204 - No content com corpo vazio.  
 Em caso de não encontrar o id retornará um status 404.

#### Altera um item de uma tarefa por id - PATCH: http://localhost:3000/todos/_id 

 Altera na tarefa especificada pela variável _id o campo enviado pelo corpo da requisição, utilizando o método PATCH.  
 Em caso de sucesso retorna um 204 - No content com corpo vazio.  
 Em caso de não encontrar o id retornará um status 404.  
 Se for enviada alguma informação em formato inválido retornará um status 400 informando qual foi o erro.
> {  
>  "statusCode": 400,  
>  "error": "Bad Request",  
>  "message": "\"description\" must be a string",  
>  "validation": {  
>    "source": "body",  
>    "keys": [  
>      "description"  
>    ]  
>  }
> }

#### Altera a tarefa por completo através do id- PUT: http://localhost:3000/todos/_id 

 Altera o recurso completo da tarefa especificada pela variável _id, utilizando o método PUT.  a
 Em caso de sucesso retorna um 204 - No content com corpo vazio.   
 Em caso de não encontrar o id retornará um status 404.
 Se não for enviado algum campo ou enviado em formato errado, retornará status 400 informando qual foi o erro.  
> {    
>  "statusCode": 400,  
>  "error": "Bad Request",  
>  "message": "\"completed\" is required",  
>  "validation": {  
>    "source": "body",  
>    "keys": [  
>      "completed"  
>    ]  
>  }  
>}  
