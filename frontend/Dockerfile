# Stage 1: Build the Angular app
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install frontend dependencies
RUN npm install

# Copy all Angular app files into the container
COPY . .

# Build the Angular app for production
RUN npm run build --configuration=production

# Stage 2: Serve the Angular app using Nginx
FROM nginx:alpine

# Copy the built Angular app into Nginx's default directory
COPY --from=build /usr/src/app/dist/user-app /usr/share/nginx/html

# Expose the default Nginx HTTP port
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
