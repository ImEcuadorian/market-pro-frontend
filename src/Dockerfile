ARG FRONTEND_NAME=market-pro-frontend
FROM node:20.10.0
LABEL authors="Hugo Saldarriaga"

ARG FRONTEND_NAME

WORKDIR /app/${FRONTEND_NAME}

COPY ./package.json .
COPY ./package-lock.json .

RUN npm i

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
