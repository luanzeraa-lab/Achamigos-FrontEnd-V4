 Como rodar em container Docker
Pré-requisitos - Docker desktop instalado e aberto

Criar a imagem Docker No diretório raiz do frontend (onde está o Dockerfile):

docker build -t frontend-app .

Rodar o container docker run -d -p 3000:3000 --name frontend-container frontend-app

A aplicação estará acessível em: http://localhost:3000

Parar e remover o container Para parar:

docker stop frontend-container

Para remover:

docker rm frontend-container