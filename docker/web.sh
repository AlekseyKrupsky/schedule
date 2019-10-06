#!/bin/sh

#export HOST="$(curl -m2 -s 169.254.169.254/latest/meta-data/local-hostname)"
#export LOCAL_IP="$(curl -m2 -s 169.254.169.254/latest/meta-data/local-ipv4)"

php migrate:refresh --seed

httpd -DFOREGROUND
