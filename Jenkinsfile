pipeline{
    // agent {
    //     docker {
    //         image 'node:8.11.3-alpine'
    //         args '-p 3000:3000'
    //     }
    // }
    agent {
	label 'macagent'
    }
    
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
            post {
                always {
                    publishHTML target: [
                        allowMissing         : false,
                        alwaysLinkToLastBuild: false,
                        keepAll             : true,
                        reportDir            : 'coverage',
                        reportFiles          : 'index.html',
                        reportName           : 'Test Report'
                    ]
                }
            }
        }
        stage('Package'){
            steps{
                sh 'yarn build'
            }
        }
        stage('SonarQube Analysis') {
            steps{
                sh 'sonar-scanner '
            }
        }
        // stage('Lint') {
        //     steps{
        //         sh 'yarn lint'
        //     }
        // }
    }
}
