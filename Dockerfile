FROM node:22.17.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install -g npm@11.4.2

COPY . .

EXPOSE 8080

RUN addgroup -g 1001 -S appgroup && adduser -u 1001 -S appuser -G appgroup
USER appuser

ENV CHOKIDAR_USEPOLLING=true

CMD ["node", "server.js"]
