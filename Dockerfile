FROM node:latest AS base
COPY --from=node:latest /usr/local/bin/node /usr/local/bin/node

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV=development

RUN yarn db:generate

EXPOSE 3000

CMD ["yarn", "dev"]