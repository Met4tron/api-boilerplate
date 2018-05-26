# Use latest node version 8.x
FROM node:8.10.0

MAINTAINER Yuri Gomes <yuurig@gmail.com>

# create app directory in container
RUN mkdir -p /www

# set /app directory as default working directory
WORKDIR /www

# only copy package.json initially so that `RUN yarn` layer is recreated only
# if there are changes in package.json
ADD package.json yarn.lock /www/

# --pure-lockfile: Don’t generate a yarn.lock lockfile
RUN yarn --pure-lockfile

# copy all file from current dir to /app in container
COPY . /www/

# expose port 4040
EXPOSE 3000

# cmd to start service
CMD [ "yarn", "start" ]