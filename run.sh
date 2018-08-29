#!/usr/bin/env bash

sudo docker run \
    -dit \
    --name ergo87.github.io \
    -p 11000:80 \
    -v "$PWD":/usr/local/apache2/htdocs/ \
    httpd:2.4

