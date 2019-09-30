FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

# Copying package.json and package-lock.json using a wildcard
COPY package*.json ./
# Install app dependencies
RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn", "serve"]


#### RUN ####

# docker build -t webship-frontend .
# docker run -it -p 8000:8081 webship-frontend