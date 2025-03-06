pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', credentialsId: 'your-credential-id', url: 'https://github.com/PhucHau-01/devops-cicd-project.git'
            }
        }
        stage('Build') {
            steps {
                sh 'echo Building the project...'
            }
        }
        stage('Test') {
            steps {
                sh 'echo Running tests...'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo Deploying application...'
            }
        }
    }
}
