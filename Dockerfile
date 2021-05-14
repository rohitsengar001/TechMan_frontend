#stage 1
FROM node:10.16.1-alpine as builder
WORKDIR /TechManFrontend
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:1.15.8-alpine
COPY --from=builder /TechManFrontend/dist/TechManFrontend /usr/share/nginx/html