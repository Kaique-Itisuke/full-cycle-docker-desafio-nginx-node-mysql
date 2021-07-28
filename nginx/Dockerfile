FROM nginx:1.21.1-alpine

# Instalando dependências necessárias para o Dockerize
RUN apk update && \
    apk add --no-cache wget && \
    apk add --no-cache openssl

# Instalando Dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY default.conf /etc/nginx/conf.d/