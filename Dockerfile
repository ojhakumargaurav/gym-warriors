# Use a Node.js base image that includes distroless slim
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm ci

COPY . .

RUN npm run build --prod

# Expose port 4000 (or the port your Angular app uses with SSR)
# Make sure your server.ts file listens to the PORT environment variable provided by Cloud Run
ENV PORT=4000
EXPOSE 4000


# Start the server
CMD ["node", "..dist/gym-warriors/server/server.mjs"]