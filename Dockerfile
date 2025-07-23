# Use official Node.js LTS image
FROM node:22-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install -g npm@11.4.2
RUN npm install-clean

# Copy source files
COPY . .

# Expose backend port (adjust if needed)
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
