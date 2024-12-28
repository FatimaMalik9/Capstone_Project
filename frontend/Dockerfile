# Use the official Angular image as a parent image
FROM node:22.12.0 AS build

# Set the working directory inside the container
WORKDIR /usr/src/app


# Copy package.json and package-lock.json to the working directory
COPY cab-booking-app/package.json ./

# Clean npm cache and remove node_modules if any exist
RUN npm cache clean --force
RUN rm -rf node_modules

# Install Angular CLI
RUN npm install -g @angular/cli@19.0.2

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY cab-booking-app .


# Expose port 80 to the outside world
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--disable-host-check"]
