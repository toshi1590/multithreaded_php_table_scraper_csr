FROM nginx:latest

RUN sed '31a fastcgi_connect_timeout 3600;' /etc/nginx/nginx.conf -i && \
    sed '32a fastcgi_send_timeout 3600;' /etc/nginx/nginx.conf -i && \
    sed '33a fastcgi_read_timeout 3600;' /etc/nginx/nginx.conf -i && \
    sed '34a proxy_connect_timeout 3600;' /etc/nginx/nginx.conf -i && \
    sed '35a proxy_send_timeout 3600;' /etc/nginx/nginx.conf -i && \
    sed '36a proxy_read_timeout 3600;' /etc/nginx/nginx.conf -i && \
    sed '37a send_timeout 3600;' /etc/nginx/nginx.conf -i && \
    sed "s/keepalive_timeout  [0-9]\+/keepalive_timeout 3600/" /etc/nginx/nginx.conf -i