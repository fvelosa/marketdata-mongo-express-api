FROM node:12.20.2-alpine3.10
WORKDIR /usr/src/app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY tsconfig.json tsconfig.json
COPY tsconfig.prod.json tsconfig.prod.json
COPY build.ts build.ts
COPY swagger.yml swagger.yml
COPY src src
RUN npm run build
CMD ["npm", "run", "start"]
