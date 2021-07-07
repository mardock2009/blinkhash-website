node {

  // Initialize Variables
  def dockerImage = null
  def taskRevision = null

  // Environment Variables (Main)
  env.ecrRegistry = 'https://348473643547.dkr.ecr.us-east-1.amazonaws.com/blinkhash-documentation'
  env.ecrCredentials = 'ecr:us-east-1:blinkhash-documentation-aws-key'

  // Infrastructure Variables (Dev)
  env.ecsFamilyDev = 'blinkhash-dev-documentation'
  env.ecsClusterDev = 'blinkhash-dev-documentation'
  env.ecsDefinitionDev = 'file://aws/task-definition.dev.json'
  env.ecsServiceDev = 'blinkhash-dev-documentation-service'

  // Infrastructure Variables (QA)
  env.ecsFamilyQA = 'blinkhash-qa-documentation'
  env.ecsClusterQA = 'blinkhash-qa-documentation'
  env.ecsDefinitionQA = 'file://aws/task-definition.qa.json'
  env.ecsServiceQA = 'blinkhash-qa-documentation-service'

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

  // Check to Deploy [1]
  input "Deploy to Dev Environment?"

  // Register Task Definition (Dev)
  stage('Dev - Register Task Definition') {
    echo 'Handling Task Definition Registration ...'
    sh("aws ecs register-task-definition \
      --family ${ env.ecsFamilyDev } \
      --cli-input-json ${ env.ecsDefinitionDev }")
  }

  // Get Last Task Revision (Dev)
  stage('Dev - Load Last Task Revision') {
    echo 'Check Task Definition and Get Last Revision ...'
    taskRevision = sh(returnStdout: true, script: "aws ecs describe-task-definition \
      --task-definition ${ env.ecsFamilyDev } \
      | egrep 'revision' \
      | tr ',' ' ' \
      | awk '{ print \$2 }'").trim()
  }

  // Deploy to Cluster Service (Dev)
  stage('Dev - Deploy to Cluster Service') {
    echo 'Deploying to Development Cluster ...'
    sh("aws ecs update-service \
      --cluster ${ env.ecsClusterDev } \
      --service ${ env.ecsServiceDev } \
      --task-definition ${ env.ecsFamilyDev }:${ taskRevision } \
      --desired-count 1")
  }

  // Check to Deploy [2]
  input "Deploy to QA Environment?"

  // Register Task Definition (QA)
  stage('QA - Register Task Definition') {
    echo 'Handling Task Definition Registration ...'
    sh("aws ecs register-task-definition \
      --family ${ env.ecsFamilyQA } \
      --cli-input-json ${ env.ecsDefinitionQA }")
  }

  // Get Last Task Revision (QA)
  stage('QA - Load Last Task Revision') {
    echo 'Check Task Definition and Get Last Revision ...'
    taskRevision = sh(returnStdout: true, script: "aws ecs describe-task-definition \
      --task-definition ${ env.ecsFamilyQA } \
      | egrep 'revision' \
      | tr ',' ' ' \
      | awk '{ print \$2 }'").trim()
  }

  // Deploy to Cluster Service (QA)
  stage('QA - Deploy to Cluster Service') {
    echo 'Deploying to Quality Assurance Cluster ...'
    sh("aws ecs update-service \
      --cluster ${ env.ecsClusterQA } \
      --service ${ env.ecsServiceQA } \
      --task-definition ${ env.ecsFamilyQA }:${ taskRevision } \
      --desired-count 1")
  }
}
