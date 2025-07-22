# Use minimal base image
FROM node:22-alpine

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

RUN npm install -g npm@11.4.5
    npm --include <prod|dev|optional|peer>]]
    npm --foreground-scripts] [--ignore-scripts] [--no-audit]

# Copy application code
COPY . .

# Set ownership and permissions
RUN chown -R appuser:appgroup /app && chmod -R 750 /app

# Switch to non-root user
USER appuser

# Expose only necessary port
EXPOSE 8080

# Start server
CMD ["node", "server.js"]
