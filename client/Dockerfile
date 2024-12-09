FROM node:alpine

WORKDIR /app
COPY package.json .
RUN yarn install --production && \
    yarn cache clean && \
    rm -rf /tmp/*
COPY . .

CMD [ "npm","run","dev" ]