# Rodando imagem Node.js sem Dockerfile
```bash
$ docker run --rm -it -v $(pwd)/node/:/usr/src/app -p 3000:3000 node:16 bash
$ npm init -y
$ npm i express
$ node index.js
```
> Acessar endereço: http://localhost:3000/

# Buildar e rodar imagem Node.js com Dockerfile
```bash
$ docker build -t kaiqueitisuke/node-express ./node
$ docker run -p 3000:3000 kaiqueitisuke/node-express
```
> Acessar endereço: http://localhost:3000/

# Publicando imagem Node.js no Docker Hub
```bash
$ docker push kaiqueitisuke/node-express
```
# Buildar Dockerfile.prod
```bash
$ docker build -t kaiqueitisuke/node-express ./node -f node/Dockerfile.prod
```
> Acessar endereço: http://localhost:3000/