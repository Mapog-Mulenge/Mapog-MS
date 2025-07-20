# Use Node 22 Alpine
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy rest of the app
COPY . .

# Expose port
EXPOSE 8080

# Set environment
ENV NODE_ENV=production

# Start the app
CMD ["node", "server.js"]
