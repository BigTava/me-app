FROM node:14

RUN mkdir -p /app/dapp
WORKDIR /app/dapp

RUN apt-get update \
    && apt-get install curl git \
    && curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install nodejs \
    && npm install -g npm@latest

COPY . /app/dapp

WORKDIR /app/dapp/contracts
RUN npm install
