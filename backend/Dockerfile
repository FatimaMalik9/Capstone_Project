# Use an official Node.js runtime as a parent image
FROM node:22.12.0 AS build

# Set the working directory inside the container
WORKDIR /usr/src/app





# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .



# Expose the port that the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]