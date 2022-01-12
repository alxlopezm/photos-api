FROM node:alpine
# Copy files to app directory in destination environment
COPY . /app
# Once in destination environment, change directiory to the one where app resides
WORKDIR /app
# Run app
CMD  node index.js
