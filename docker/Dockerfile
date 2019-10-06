FROM alpine:3.8
MAINTAINER Drabinka Artur <a.drabinka@godeltech.com>

RUN apk add --no-cache \
    apache2 \
    composer \
    curl \
    php7 \
    php7-apache2 \
    php7-curl \
    php7-dom \
    php7-mbstring \
    php7-pdo_mysql \
    php7-session \
    php7-sockets \
    php7-tokenizer \
    php7-xml \
    php7-xmlwriter \
    php7-fileinfo \
    && mkdir /run/apache2 \
    && ln -sf /dev/stdout /var/log/apache2/access.log \
    && ln -sf /dev/stderr /var/log/apache2/error.log

WORKDIR /app

RUN touch .env
COPY docker/.env-dev .env

COPY laravel/composer.* ./
RUN composer install -n --no-autoloader --no-scripts --no-progress --no-suggest

COPY docker/apache2.conf /etc/apache2/conf.d

COPY docker/web.sh /run-web.sh
RUN chmod 755 /run-*.sh

COPY laravel .
RUN chown -R apache storage \
    && composer dump-autoload -o -n

EXPOSE 80

CMD /run-web.sh
