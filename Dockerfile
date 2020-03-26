FROM node:13-alpine

WORKDIR /app

COPY ./.env ./package.json ./package-lock.json /app/

RUN npm install

COPY ./src /app/src

EXPOSE $PORTA

#USER node

CMD ["npm", "run", "start"]