## comandos


### modo cluster
#### forever server.js 8080 --m cluster

### modo fork
#### forever server.js --p 8080 --m fork

### detener
#### forever stopall

### PM2 (usar en gitbash)

### modo fork
#### pm2 start server.js --name="serverFork" --watch -- 8081

### modo cluster
#### pm2 start server.js --name="serverCluster" --watch -i max -- 8081

### detener servidores
#### pm2 stop serverFork
#### pm2 stop serverCluster

### borrar servidores
#### pm2 delete serverFork
#### pm2 delete serverCluster

### nginx
#### tasklist /fi "imagename eq nginx.exe"
#### taskkill /F /IM nginx.exe


### gzip
#### en ruta /info vemos los datos sin comprimir
#### en ruta /gzip vemos los datos comprimidos


### logger
#### configurar en .env: NODE_ENV=production

### node profiler 
#### artillery quick --count 10 -n 50 "http://localhost:8080/info" > result_info.txt

#### artillery quick --count 10 -n 50 "http://localhost:8080/random" > result_random.txt

### node --prof-process info-v8.log > result_prof-info.txt
### node --prof-process random-v8.log > result_prof-random.txt
### node --inspect server.js



### autocannon
#### script: "test":"node benchmark.js"
#### script: "start":"0x server.js"
#### npm start
#### npm test