# Stage 1: Build Angular App
FROM node:18 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build -- --output-path=dist/blog-web

# Stage 2: Serve App with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist/blog-web/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
