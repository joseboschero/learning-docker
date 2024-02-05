FROM node:21

RUN mkdir -p /home/learning-docker

COPY . /home/learning-docker

EXPOSE 3000

CMD ["node", "/home/learning-docker/index.js"]