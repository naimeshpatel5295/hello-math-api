# Use official Node image
FROM node:20-alpine

# Create app directory inside container
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "index.js"]
