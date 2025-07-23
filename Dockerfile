FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install -g npm@11.4.2

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]
