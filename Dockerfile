FROM node:carbon-slim
# vue-cli reqires 8.10.0+ 

RUN apt-get -y update \
    && apt-get install -y git

RUN npm install -g @vue/cli

WORKDIR /target/in/container

EXPOSE 8080

USER node

CMD ["yarn", "serve"]

#### RUN ####

# docker build -t webship-frontend .
# docker run -it -p 8000:8081 webship-frontend