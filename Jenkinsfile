pipeline {
    agent any
    
    stages {
        stage('checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/FatimaMalik9/Capstone_Project.git'
            }
        }
        stage('Build') {
            steps {
                bat 'docker-compose build --no-cache'
            }
        }
        stage('Tag image') {
            steps {
                bat 'docker tag project-frontend fatimamalik1/project-frontend'
                bat 'docker tag project-backend fatimamalik1/project-backend'
            }
        }
        stage('Push Image') {
            steps {
                
                    bat "echo 'fatima2939' | docker login -u fatimamalik1 --password-stdin"
                    bat 'docker push fatimamalik1/project-backend:latest'
                    bat 'docker push fatimamalik1/project-frontend:latest'
             }
        }
        
        stage('Deploy') {
            steps {
                bat """
            ssh -i ${SSH_KEY_PATH} -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} ^ 
            "docker stop project-frontend-1 || true && ^
            docker rm project-frontend-1 || true && ^
            docker rmi fatimamalik1/project-frontend:latest || true && ^
            docker pull fatimamalik1/project-frontend:latest && ^
            docker run -d --name project-frontend-1 -p 4200:4200 fatimamalik1/project-frontend:latest"
            """

            bat """
            ssh -i ${SSH_KEY_PATH} -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} ^ 
            "docker stop project-backend-1 || true && ^
            docker rm project-backend-1 || true && ^
            docker rmi fatimamalik1/project-backend:latest || true && ^
            docker pull fatimamalik1/project-backend:latest && ^
            docker run -d --name project-backend-1 -p 3000:3000 fatimamalik1/project-backend:latest"
            """
            }
        }
    }
}

























