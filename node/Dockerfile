FROM node:16-alpine3.14

WORKDIR /usr/src/app

# Instalando dependências necessárias para o Dockerize
RUN apk update && \
    apk add --no-cache wget && \
    apk add --no-cache openssl

# Instalando Dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz


COPY package*.json ./

RUN npm install

COPY . .