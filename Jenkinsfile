pipeline {
    agent any

    environment {
        // Define environment variables
        SSH_KEY_PATH = 'D:\\cab-key.pem'
        SSH_USER = 'ec2-user'
        SSH_HOST = '54.227.9.117'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building application...'
                // Add your build commands here
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add your test commands here
            }
        }

        stage('Deploy Backend') {
            steps {
                script {
                    echo 'Deploying Cab Booking Backend to AWS EC2...'
                    sshagent(['SSH_KEY_PATH']) {
                        bat """
                        set SSH_CMD=ssh -i %SSH_KEY_PATH% -o StrictHostKeyChecking=no %SSH_USER%@%SSH_HOST%
                        call %SSH_CMD% ^
                        docker stop cab-booking-backend || true ^
                        docker rm cab-booking-backend || true ^
                        cd /var/www/cab-booking-backend ^
                        docker build -t cab-booking-backend . ^
                        docker run -d -p 3000:3000 cab-booking-backend
                        """
                    }
                }
            }
        }

        stage('Deploy Frontend') {
            steps {
                script {
                    echo 'Deploying Cab Booking Frontend to AWS EC2...'
                    sshagent(['SSH_KEY_PATH']) {
                        bat """
                        set SSH_CMD=ssh -i %SSH_KEY_PATH% -o StrictHostKeyChecking=no %SSH_USER%@%SSH_HOST%
                        call %SSH_CMD% ^
                        docker stop cab-booking-frontend || true ^
                        docker rm cab-booking-frontend || true ^
                        cd /var/www/cab-booking-frontend ^
                        docker build -t cab-booking-frontend . ^
                        docker run -d -p 80:80 cab-booking-frontend
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            // Add any cleanup steps if necessary
        }
        success {
            echo 'Deployment completed successfully.'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
