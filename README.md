# This Project is practical guide for Docker & Node Enthusiast who have no idea about Dockers.


## Simplifying Docker
    In a normal manner, we install Nodejs in our machines(Mac/Windows/Linux etc), then install Mongo, the  Redis etc to run our application. Now if run the same code in other machine, we might need different steps in setting up. Dockers bypasses this thing, it creates a virual environment inside our operating system, the steps to run dockers remains same in all operating system which is why it helps programmers in setting up development environment with ease.

## We will try to setup the same code with docker & inside OS to See the difference
    
    ### With Docker(Install Docker for Mac/Windows/Linux)
        Run the following commands to start the application
            git clone https://github.com/containeraki/docker-node-redis-mongo-boilerplate (1 min)
            cd docker-node-redis-mongo-boilerplate (1 min)
            Docker-compose up (~2-5 min)
        
            Thats all, now you can look into browser localhost:8000
    
    ### Operating System
        To run this code in operating system, 
            Install REDIS for operating system (~5-10 min)
            Install MONGODB for operating system(~5-10 min)
            git clone https://github.com/containeraki/docker-node-redis-mongo-boilerplate (1 min)
            In index.js, to connect mongodb on localhost, replace 'mongodb://mongo:27017' with 'mongodb://localhost:27017' & 'redis.createClient(6379,"redis")' with 'redis.createClient(6379,"localhost")'. To asnwer your question why, see the file - docker-compose.yml, where we have given name to services mongo as mongo & redis as redis.
            cd docker-node-redis-mongo-boilerplate (1 min)
            npm install (1 min)

            Isn't this long & try to run the same code in other operating system & things wont be easy, also when you are a team, its not good that your code is working on one system & not on other, thats whyt people prefer things such as Docker/Kubernetes.

## Docker Mounting
    Command "Docker-compose up" will review two files
        1. docker-compose.yml - It reads that we need mongo image, redis image & node image, lets get ready. 
        2. Dockerfile - Contains set of command which will be run by our application to copy our application from operating system. 

## Understanding Other Files
    .dockerignore - Some files are specific to operating system i.e node_modules, so this file works like .gitignore
    index.js - Contains code for running express application & configuration for connecting mongo & Redis. 



## Docker Image & Containers
    Think Practically, Docker Image such as Mongo will be virtual environment where mongo will be all set to work, Docker image node will give virual environment for Node apps & Container is that virtual environment.

## What's next
    This is just a starter, so you can build your next project with containers.

## Links which helped me during development
    https://docs.docker.com/machine/get-started/#use-machine-to-run-docker-containers
    https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes
    https://blog.codeship.com/docker-machine-compose-and-swarm-how-they-work-together/
    https://medium.com/@kahana.hagai/docker-compose-with-node-js-and-mongodb-dbdadab5ce0a
    https://github.com/barrysteyn/node-scrypt/issues/160
    https://medium.com/@mezgec.danilo/docker-cli-dockerfile-and-docker-compose-from-scratch-13291656a0ca
    https://www.codeproject.com/Articles/1223882/Setting-Up-a-Redis-Test-Environment-using-Docker-C
    https://codewithhugo.com/setting-up-express-and-redis-with-docker-compose/
    https://github.com/docker-library/redis/issues/111
    https://stackoverflow.com/questions/38623027/what-is-the-difference-between-docker-machine-and-docker-compose
    https://expressjs.com/en/starter/hello-world.html
    https://medium.com/the-code-review/top-10-docker-commands-you-cant-live-without-54fb6377f481
    https://github.com/duiliopastorelli/docker-walk-through/blob/master/Dockerfile

