pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Builds Docker images and runs them
                    sh 'docker-compose up --build -d'
                }
            }
        }
        stage('Test') {
            steps {
                // Define tests to run inside your containers
                sh 'echo "Running tests"'
                // Example: sh 'docker-compose exec backend npm test'
            }
        }
        stage('Deploy') {
            steps {
                // Deploy your application
                sh 'echo "Deploying application"'
            }
        }
    }

    post {
        always {
            // Take down the Docker containers
            sh 'docker-compose down'
        }
    }
}
