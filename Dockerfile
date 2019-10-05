FROM node:lts-alpine as build-stage
# vue-cli reqires 8.10.0+ 

# set working directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn global add @vue/cli

EXPOSE 8081

USER node

CMD ["yarn", "serve"]

#### RUN ####

# docker build -t frontend-app .
# docker run -it -p 8000:8081 frontend-ap

# production stage
# https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html#Real-World-Example