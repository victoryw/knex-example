FROM node:8.11.1

RUN mkdir /base-data
WORKDIR /base-data

ADD  ./ /base-data/

CMD ["npm", "run", "up"]