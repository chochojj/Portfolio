#!/bin/bash
source ~/.bashrc
cd /home/next_popomon/next_popomon
npm ci
pm2 restart all
