FROM node:18.16.0-alpine
WORKDIR /var/www/reactAd/app
RUN npm install -g npm@latest && npm install -g vite@latest