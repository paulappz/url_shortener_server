<h1 align="center">
  URL-Shortner
</h1>

<h4 align="center">Creating custom URL shortener With Nodejs Typescript and Jest(TDD) </h4>

## Architecture

<img src="sketch/architecture.png" alt="architecture" />

## Technologies

- ### Back end

  - [Express](https://expressjs.com/)- Nodejs framwork for building the REST Apis
  - [Mongodb](http://mongodb.com/)- Document oriented NoSQL database
  - [Mongoose](https://http://mongoosejs.com)- MongoDB object modeling tool
  - [Short-id](https://github.com/dylang/shortid)- Short id generator
  - [Valid-url](https://github.com/ogt/valid-url)- URI validation functions



## Getting Started

#### Access the project

```sh
cd URL_Shortner

```

### Setup mongo db -- using Mongo Atlas or Docker

```
# Visit - https://www.mongodb.com/try to setup a cloud database

```

## Using Docker 

```
# Run containers
docker compose build

# Start services
docker compose up
```


## Locally 
```
# Install dependencies
npm i

# Start  server
npm start

# Run test
npm test

```

### Test API on Postman

https://www.getpostman.com/collections/4da9a27ddd64c8630d65

