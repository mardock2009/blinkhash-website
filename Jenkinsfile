node {

  // Initialize Variables
  def dockerImage = null
  def ecrRegistry = 'https://348473643547.dkr.ecr.us-east-1.amazonaws.com/blinkhash-documentation'
  def ecrCredentials = 'ecr:us-east-1:blinkhash-documentation-aws-key'

  // Clone Current Repository
  stage('Clone Repository') {
    echo 'Cloning Current Repository State ...'
    checkout scm
  }

  // Build Docker Image
  stage('Build Docker Image') {
    echo 'Building Docker Image ...'
    dockerImage = docker.build('blinkhash-documentation')
  }

  // Push Image to AWS ECR
  stage('Save Docker Image') {
    echo 'Pushing Image to Registry ...'
    docker.withRegistry(ecrRegistry, ecrCredentials) {
      dockerImage.push(env.BUILD_NUMBER)
      dockerImage.push('latest')
    }
  }
}
