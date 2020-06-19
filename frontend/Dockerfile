FROM node:12.9-alpine

WORKDIR /srv

# Install requirements
ADD package.json package-lock.json ./
RUN npm install

# Add the source
ADD . ./

CMD ["npm", "start"]
