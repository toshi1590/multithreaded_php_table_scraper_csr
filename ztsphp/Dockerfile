FROM mohsenmottaghi/php-fpm-zts:7.4

RUN apt-get update && \
    apt-get install -y gnupg && \
    pecl install parallel-1.1.4 && \
    docker-php-ext-enable parallel

ADD https://chromedriver.storage.googleapis.com/78.0.3904.70/chromedriver_linux64.zip /usr/local/bin/

RUN apt-get install unzip -y && \
    cd /usr/local/bin && \
    unzip /usr/local/bin/chromedriver_linux64.zip && \
    chmod +x /usr/local/bin/chromedriver

RUN cat /usr/local/etc/php/php.ini-development > /usr/local/etc/php/php.ini && \
    sed "s/max_execution_time = [0-9]\+/max_execution_time = 3600/" /usr/local/etc/php/php.ini -i