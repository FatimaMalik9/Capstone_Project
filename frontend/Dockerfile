# Use an official Node.js runtime as a parent image
FROM node:latest as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available)
COPY package.json package-lock.json* ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the project for production.
RUN npm run build

# Build the Angular app for production
# RUN npm run build --configuration=production

# Stage 2: Serve the Angular app using Nginx
# FROM nginx:alpine

# Copy the built Angular app into Nginx's default directory
# COPY --from=build /usr/src/app/dist/user-app /usr/share/nginx/html

# Expose the default Nginx HTTP port
# EXPOSE 80

# Start the Nginx server
# CMD ["nginx", "-g", "daemon off;"]
