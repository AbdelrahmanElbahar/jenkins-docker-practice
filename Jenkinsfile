pipeline {

    agent any

    options {
        disableConcurrentBuilds()
    }

    environment {
        APP_NAME = "jenkins-practice-app"
        APP_PORT = "3000"
        DOCKER_IMAGE = "jenkins-practice-app"
    }

    stages {

        stage('Build') {
            steps {
                echo 'Building the application...'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing the application...'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
            }
        }

        stage('Health Check') {
            steps {
                echo 'Checking application health...'
            }
        }
    }

    post {

        success {
            echo 'CI/CD pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}