node {

  // Initialize Variables
  def dockerImage = null
  def taskRevision = null

  // Environment Variables
  env.ecrRegistry = 'https://348473643547.dkr.ecr.us-east-1.amazonaws.com/blinkhash-documentation'
  env.ecrCredentials = 'ecr:us-east-1:blinkhash-documentation-aws-key'
  env.ecsFamily = 'blinkhash-documentation'
  env.ecsDefinition = 'file://task-definition.json'

  // Infrastructure Variables
  env.ecsClusterDev = 'blinkhash-dev-documentation'
  env.ecsClusterQA = 'blinkhash-qa-documentation'
  env.ecsClusterProd = 'blinkhash-prod-documentation'

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
    docker.withRegistry(env.ecrRegistry, env.ecrCredentials) {
      dockerImage.push(env.BUILD_NUMBER)
      dockerImage.push('latest')
    }
  }

  // Register Task Definition
  stage('Register Task Definition') {
    echo 'Handling Task Definition Registration ...'
    sh("aws ecs register-task-definition \
      --family ${ env.ecsFamily } \
      --cli-input-json ${ env.ecsDefinition }")
  }

  // Get Last Task Revision
  stage('Load Last Task Revision') {
    echo 'Check Task Definition and Get Last Revision ...'
    taskRevision = sh(returnStdout: true, script: "aws ecs describe-task-definition \
      --task-definition ${ env.ecsFamily } \
      | egrep 'revision' \
      | tr ',' ' ' \
      | awk '{ print \$2 }'").trim()
  }

  // Deploy to Development Cluster
  stage('Deploy to Development Cluster') {
    echo 'Deploying to Development Cluster ...'
    sh("aws ecs update-service \
      --cluster ${ env.ecsClusterDev } \
      --service ${ env.ecsFamily } \
      --task-definition ${ env.ecsFamily }:${ taskRevision } \
      --desired-count 1")
  }
}
