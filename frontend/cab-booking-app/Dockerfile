# Use a Node image to build the Angular app
FROM node:14 as build

# Set working directory
WORKDIR /usr/src/app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the project for production
RUN ng build --prod

# Use Nginx to serve the app
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/cab-booking-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx and keep it running
CMD ["nginx", "-g", "daemon off;"]
