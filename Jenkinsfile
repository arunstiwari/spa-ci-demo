pipeline{
    // agent {
    //     docker {
    //         image 'node:8.11.3-alpine'
    //         args '-p 3000:3000'
    //     }
    // }
    agent any
    
    environment {
        CI = 'true'
    }
    stages {
        stage('Build'){
            steps {
                sh 'yarn install'
            }
        }
        stage('Test') {
            steps{
                sh 'yarn test'
            }
        }
        stage('Coverage'){
            steps{
                sh 'yarn test --coverage'
            }
        }
        stage('Package'){
            steps{
                sh 'yarn build'
            }
        }
        stage('SonarQube Analysis') {
            steps{
                sh 'sonar-scanner   -Dsonar.projectKey=CoursesApp   -Dsonar.sources=./src   -Dsonar.host.url=http://localhost:9000   -Dsonar.login=0e428ac27218a879e8f5d0cc7e3405f0b78b9ed5'
            }
        }
        stage('Lint') {
            steps{
                sh 'yarn lint'
            }
        }
    }
}
