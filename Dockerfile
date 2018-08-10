FROM mhart/alpine-node

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package.json /usr/app

COPY yarn.lock /usr/app

RUN yarn install

COPY . /usr/app

EXPOSE 3000

CMD [ "yarn", " run dev"]
