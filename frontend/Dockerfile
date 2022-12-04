FROM node:18-alpine

WORKDIR /front

COPY . .

RUN npm install

RUN npm run build

RUN mkdir static
RUN cp -r build/static static
