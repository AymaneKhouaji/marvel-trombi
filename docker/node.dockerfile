FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY backend/build /usr/src/app

COPY backend/node_modules /usr/src/app/node_modules

EXPOSE 3001

CMD [ "node", "server.js" ]