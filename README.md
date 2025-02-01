## Cab Booking App 🚖

# Description

The Cab Booking App is a full-stack web application built using Angular, Node.js, MongoDB, Express, 
and Bootstrap. The app allows users to book cabs by providing pickup and destination details along with date and time. 
Admins can manage cab availability, and customers can view their booking history. The application is Dockerized and deployed using Jenkins on an AWS EC2 instance.

# Features
✅ User-friendly UI: Built with Angular and Bootstrap.
✅ Cab Booking System: Customers can book a cab by providing details.
✅ Admin Dashboard: Admins can manage cab availability.
✅ Customer Dashboard: Customers can view their booking details.
✅ MongoDB Atlas Integration: Uses a cloud database for data storage.
✅ Dockerized App: Both frontend and backend are containerized using Docker.
✅ Deployment with Jenkins and AWS EC2: Automates the CI/CD pipeline.

# Technologies Used
Frontend: Angular, Bootstrap
Backend: Node.js, Express.js
Database: MongoDB Atlas, Mongoose
Containerization: Docker (Dockerfiles for frontend and backend)
Orchestration: Docker Compose
CI/CD: Jenkins
Cloud Deployment: AWS EC2

# Installation and Setup

1. Clone the Repository

git clone https://github.com/FatimaMalik9/Cab_Booking_App.git  
cd Cab_Booking_App  

2. Setup Backend
cd backend  
npm install  
npm start  

3. Setup Frontend
cd frontend  
npm install  
ng serve  

# Running the Application Locally
Backend runs on: http://localhost:3000
Frontend runs on: http://localhost:4200
MongoDB Local Connection: mongodb://localhost:27017/cab_booking_app

# Dockerization
1. Create Docker Images
A Dockerfile is created in both frontend and backend folders.
A docker-compose.yml file is used to manage multiple containers.
2. Build and Run Docker Containers
docker-compose up --build  
The application is now accessible at http://localhost:4200.
Push Docker Images to Docker Hub
docker tag cab_booking_backend <dockerhub-username>/cab_booking_backend  
docker tag cab_booking_frontend <dockerhub-username>/cab_booking_frontend  
docker push <dockerhub-username>/cab_booking_backend  
docker push <dockerhub-username>/cab_booking_frontend  

# Deployment using Jenkins and AWS EC2

Create an AWS EC2 Instance
Launch an EC2 instance and configure security groups.

# Install Docker on EC2

sudo apt update  
sudo apt install docker.io -y  
sudo systemctl start docker  
sudo systemctl enable docker  

# Deploy the Application on EC2

Pull Docker images from Docker Hub.

docker pull <dockerhub-username>/cab_booking_backend  
docker pull <dockerhub-username>/cab_booking_frontend  

# Run containers on EC2.

docker run -d -p 3000:3000 <dockerhub-username>/cab_booking_backend  
docker run -d -p 4200:4200 <dockerhub-username>/cab_booking_frontend  

Application run on live on EC2.

# Conclusion

This Cab Booking App successfully integrates MEAN stack technologies, Docker, and Jenkins CI/CD pipeline, deploying the application onto an AWS EC2 instance. 🚀
