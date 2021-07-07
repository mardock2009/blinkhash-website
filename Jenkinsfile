node {

  // Initialize Variables
  def dockerImage = null
  def taskRevision = null

  // Environment Variables (Main)
  env.ecrRegistry = 'https://348473643547.dkr.ecr.us-east-1.amazonaws.com/blinkhash-documentation'
  env.ecrCredentials = 'ecr:us-east-1:blinkhash-documentation-aws-key'

  // Infrastructure Variables (Family/Cluster)
  env.ecsFamilyDev = 'blinkhash-dev-documentation'
  env.ecsFamilyQA = 'blinkhash-qa-documentation'
  env.ecsFamilyProd = 'blinkhash-prod-documentation'

  // Infrastructure Variables (Task Definitions)
  env.ecsDefinitionDev = 'file://aws/task-definition.dev.json'
  env.ecsDefinitionQA = 'file://aws/task-definition.qa.json'
  env.ecsDefinitionProd = 'file://aws/task-definition.prod.json'

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

  // Register Task Definition (Dev)
  stage('Register Task Definition (Dev)') {
    echo 'Handling Task Definition Registration ...'
    sh("aws ecs register-task-definition \
      --family ${ env.ecsFamilyDev } \
      --cli-input-json ${ env.ecsDefinitionDev }")
  }

  // Get Last Task Revision (Dev)
  stage('Load Last Task Revision (Dev)') {
    echo 'Check Task Definition and Get Last Revision ...'
    taskRevision = sh(returnStdout: true, script: "aws ecs describe-task-definition \
      --task-definition ${ env.ecsFamilyDev } \
      | egrep 'revision' \
      | tr ',' ' ' \
      | awk '{ print \$2 }'").trim()
  }

  // Deploy to Cluster Service (Dev)
  stage('Deploy to Cluster Service (Dev)') {
    echo 'Deploying to Development Cluster ...'
    sh("aws ecs update-service \
      --cluster ${ env.ecsFamilyDev } \
      --service ${ env.ecsFamilyDev } \
      --task-definition ${ env.ecsFamilyDev }:${ taskRevision } \
      --desired-count 1")
  }
}
