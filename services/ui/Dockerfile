FROM node:17-alpine

RUN mkdir -p /services/ui
WORKDIR /services/ui

COPY package.json .
RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]