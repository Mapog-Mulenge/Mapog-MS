# Use official Node.js LTS image
FROM node:22-alpine

# Set work directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy backend code
COPY . .

# Expose API port
EXPOSE 5000

# Start backend server
CMD ["node", "server.js"]
