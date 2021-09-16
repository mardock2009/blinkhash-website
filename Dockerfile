FROM node:14-alpine3.12 AS deps
ENV SERVICE_NAME website
LABEL maintainer="blinkhashpool@gmail.com"
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

FROM node:14-alpine3.12 AS builder
WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:14-alpine3.12 AS runner
ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
WORKDIR /app

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

FROM nginx:alpine AS deployer
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/out /usr/share/nginx/html/
COPY --from=builder /app/out/index.html /usr/share/nginx/html/index.html

EXPOSE 3000 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
