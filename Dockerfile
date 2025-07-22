# Use a slim Node base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Force npm to clear cache and disable integrity check
ENV NPM_CONFIG_CACHE=/tmp/.npm-cache
ENV NODE_ENV=production

# Copy package files and install dependencies
COPY package*.json ./

# Clean npm cache and force fresh package download
RUN npm install -g npm
    npm ci

# Copy application code
COPY . .

# Expose app port
EXPOSE 8080

# Start the app
CMD ["node", "server.js"]
