FROM node:10.13.0-alpine

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY ./src /usr/src/app

EXPOSE 3000

CMD node app.js