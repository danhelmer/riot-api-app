# Use Node.js LTS as base
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Expose frontend dev server port (Vite default)
EXPOSE 5173

# Command to run frontend dev server
CMD ["npm", "run", "dev"]
