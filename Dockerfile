FROM node:20.11.1 AS dist

WORKDIR /app

COPY ./ .

RUN npm i

RUN npm run build:dev


FROM ubuntu/apache2

RUN mkdir -p  /var/www/html

WORKDIR /var/www/html/

COPY --from=dist /app/build/ ./
# RUN mkdir static
# RUN mv css static/
# RUN mv js static/
EXPOSE 80
