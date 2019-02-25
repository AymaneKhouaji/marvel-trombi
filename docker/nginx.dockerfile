FROM nginx:alpine

COPY frontend/build /usr/share/nginx/html

COPY docker/conf/nginx.conf /etc/nginx/conf.d/default.conf