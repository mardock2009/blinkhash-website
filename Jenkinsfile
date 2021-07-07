properties([
  parameters([
    booleanParam(name: 'overrideDefaults', defaultValue: false, description: 'Override defaults - if this is false, all of the following options will do nothing'),
    choice(name: 'uploadEnvironment', choices: "none\ndev\nqa\ndev-qa\nprod\nall", description: "The environment to push task descriptions to - 'all' will deploy to all environments in order"),
    choice(name: 'deployEnvironment', choices: "none\ndev\nqa\ndev-qa\nprod\nall", description: "The environment to deploy to - 'all' will deploy to all environments in order"),
  ])
])

node {

  // Initialize Variables
  def dockerImage = null
  def taskRevision = null
  def uploadDev = false
  def uploadQA = false
  def uploadProd = false
  def deployDev = false
  def deployQA = false
  def deployProd = false

  // Handle Overridden Behavior
  if (params.overrideDefaults) {

    // Manage Upload Parameter
    if (params.uploadEnvironment == 'none') {
      uploadDev = false
      uploadQA = false
      uploadProd = false
    } else if (params.uploadEnvironment == 'dev') {
      uploadDev = true
      uploadQA = false
      uploadProd = false
    } else if (params.uploadEnvironment == 'qa') {
      uploadDev = false
      uploadQA = true
      uploadProd = false
    } else if (params.uploadEnvironment == 'dev-qa') {
      uploadDev = true
      uploadQA = true
      uploadProd = false
    } else if (params.uploadEnvironment == 'prod') {
      uploadDev = false
      uploadQA = false
      uploadProd = true
    } else if (params.uploadEnvironment == 'all') {
      uploadDev = true
      uploadQA = true
      uploadProd = true
    } else {
      uploadDev = false
      uploadQA = false
      uploadProd = false
    }

    // Manage Environment Parameter
    if (params.deployEnvironment == 'none') {
      deployDev = false
      deployQA = false
      deployProd = false
    } else if (params.deployEnvironment == 'dev') {
      deployDev = true
      deployQA = false
      deployProd = false
    } else if (params.deployEnvironment == 'qa') {
      deployDev = false
      deployQA = true
      deployProd = false
    } else if (params.deployEnvironment == 'dev-qa') {
      deployDev = true
      deployQA = true
      deployProd = false
    } else if (params.deployEnvironment == 'prod') {
      deployDev = false
      deployQA = false
      deployProd = true
    } else if (params.deployEnvironment == 'all') {
      deployDev = true
      deployQA = true
      deployProd = true
    } else {
      deployDev = false
      deployQA = false
      deployProd = false
    }

  // Handle Default Behavior
  } else if (BRANCH_NAME.equals('master')) {
    uploadDev = false
    uploadQA = false
    uploadProd = false
    deployDev = true
    deployQA = true
    deployProd = false
  } else if (BRANCH_NAME.equals('dev')) {
    uploadDev = false
    uploadQA = false
    uploadProd = false
    deployDev = true
    deployQA = false
    deployProd = false
  } else {
    uploadDev = false
    uploadQA = false
    uploadProd = false
    deployDev = false
    deployQA = false
    deployProd = false
  }

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

  // Register Task Definition (Dev)
  stage('Dev - Register Task Definition') {
    if (uploadDev) {
      echo 'Handling Task Definition Registration ...'
      sh("aws ecs register-task-definition \
        --family ${ env.ecsFamilyDev } \
        --cli-input-json ${ env.ecsDefinitionDev }")
    }
  }

  // Get Last Task Revision (Dev)
  stage('Dev - Load Last Task Revision') {
    if (deployDev) {
      echo 'Check Task Definition and Get Last Revision ...'
      taskRevision = sh(returnStdout: true, script: "aws ecs describe-task-definition \
        --task-definition ${ env.ecsFamilyDev } \
        | egrep 'revision' \
        | tr ',' ' ' \
        | awk '{ print \$2 }'").trim()
    }
  }

  // Deploy to Cluster Service (Dev)
  stage('Dev - Deploy to Cluster Service') {
    if (deployDev) {
      echo 'Deploying to Development Cluster ...'
      sh("aws ecs update-service \
        --cluster ${ env.ecsClusterDev } \
        --service ${ env.ecsServiceDev } \
        --task-definition ${ env.ecsFamilyDev }:${ taskRevision } \
        --desired-count 1")
    }
  }

  // Register Task Definition (QA)
  stage('QA - Register Task Definition') {
    if (uploadQA) {
      echo 'Handling Task Definition Registration ...'
      sh("aws ecs register-task-definition \
        --family ${ env.ecsFamilyQA } \
        --cli-input-json ${ env.ecsDefinitionQA }")
    }
  }

  // Get Last Task Revision (QA)
  stage('QA - Load Last Task Revision') {
    if (deployQA) {
      echo 'Check Task Definition and Get Last Revision ...'
      taskRevision = sh(returnStdout: true, script: "aws ecs describe-task-definition \
        --task-definition ${ env.ecsFamilyQA } \
        | egrep 'revision' \
        | tr ',' ' ' \
        | awk '{ print \$2 }'").trim()
    }
  }

  // Deploy to Cluster Service (QA)
  stage('QA - Deploy to Cluster Service') {
    if (deployQA) {
      echo 'Deploying to Quality Assurance Cluster ...'
      sh("aws ecs update-service \
        --cluster ${ env.ecsClusterQA } \
        --service ${ env.ecsServiceQA } \
        --task-definition ${ env.ecsFamilyQA }:${ taskRevision } \
        --desired-count 1")
    }
  }
}
