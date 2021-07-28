FROM mysql:5.7

ENV MYSQL_DATABASE=nodedb
ENV MYSQL_ROOT_PASSWORD=root

# Adicionando os scripts SQL para serem executados na criação do banco
COPY ./createDatabase.sql /docker-entrypoint-initdb.d/