pipeline {

  // Main Pipeline Agent
  agent {
    docker { image 'node:14-alpine3.12' }
  }

  // Main Pipeline Stages
  stages {

    // Install Project Dependencies
    stage('Install Dependencies') {
      steps {
        echo 'Installing Project Dependencies ...'
        sh 'npm install --cache=".jenkinsnpm"'
      }
    }
  }
}
