#!/bin/bash
sudo rm -rf /var/www/jadeflix/*.css
sudo rm -rf /var/www/jadeflix/*.js
sudo rm -rf /var/www/jadeflix/*.html
sudo rm -rf /var/www/jadeflix/*.txt
sudo rm -rf /var/www/jadeflix/*.ico
sudo cp -R /home/pi/builds/jadeflix/front/* /var/www/jadeflix/
sudo rm -rf /home/pi/builds/jadeflix/front/*
