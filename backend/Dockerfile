# Use Node.js LTS as base
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Expose backend port
EXPOSE 5000

# Command to run in development
CMD ["npm", "run", "dev"]
