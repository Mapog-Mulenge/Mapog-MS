# Dockerfile
# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install --production

# Copy the rest of the app
COPY . .

# Expose backend port
EXPOSE 8080

# Start the app
CMD ["node", "server.js"]
