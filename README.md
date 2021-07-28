# Desafio Docker Nginx com Node.js Full Cycle 2.0

## Rodando o projeto local usando docker-compose
```bash
$ docker-compose up -d
```

### Abra o link abaixo para acessar o app:
http://localhost:8080

> Obs.: O container do "app" Node.js espera o banco de dados MySQL estar pronto para receber conexões na porta 3306, bem como o container "nginx" também espera o "app" Node.js estar rodando na porta 3000. Portando a aplicação pode demorar alguns segundos para estar disponivel no link mencionado acima.