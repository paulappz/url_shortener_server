FROM node:15

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install pm2 -g

COPY . ./

EXPOSE 4000

CMD ["pm2-runtime", "dist/server.js"]