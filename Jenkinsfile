pipeline {
    agent any
    environment {
        DOCKER_CLI_ACI = "0"  // Tránh lỗi trên Windows
    }
    stages {
        stage('Clone code') {
            steps {
                git 'https://github.com/PhucHau-01/devops-cicd-project.git'
            }
        }
        stage('Build Docker images') {
            steps {
                script {
                    try {
                        sh 'docker-compose build'
                    } catch (Exception e) {
                        error "❌ Build failed!"
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    try {
                        sh 'docker-compose up -d'
                    } catch (Exception e) {
                        error "❌ Deployment failed!"
                    }
                }
            }
        }
    }
    post {
        always {
            echo "✅ CI/CD pipeline completed!"
        }
    }
}
