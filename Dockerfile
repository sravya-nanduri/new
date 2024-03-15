FROM node:20.11.1 AS dist

WORKDIR /app

COPY .package*.json ./

RUN npm i

COPY ./ .

RUN npm run build:dev


FROM ubuntu/apache2

RUN mkdir -p  /var/www/html

WORKDIR /var/www/html/

COPY --from=dist /app/build/ ./

EXPOSE 80
