properties([
  parameters([
    booleanParam(
      name: 'overrideDefaults',
      defaultValue: false,
      description: 'Override defaults - if this is false, all of the following options will do nothing.',
    ),
    booleanParam(
      name: 'deployImage',
      defaultValue: true,
      description: 'Deploy Image to ECR - if this is false, the latest image will be used to deploy.',
    ),
    choice(
      name: 'deployEnvironment',
      choices: "none\ndev\nprod\nall",
      description: "The environment to deploy to - 'all' will deploy to all environments in order.",
    ),
  ])
])

node {

  // Initialize Variables
  def dockerImage = null
  def taskRevision = null
  def deployImage = true
  def deployDev = false
  def deployProd = false

  // Handle Overridden Behavior
  if (params.overrideDefaults) {

    // Manage Image Parameter
    if (params.deployImage) {
      deployImage = true
    } else {
      deployImage = false
    }

    // Manage Environment Parameter
    if (params.deployEnvironment == 'none') {
      deployDev = false
      deployProd = false
    } else if (params.deployEnvironment == 'dev') {
      deployDev = true
      deployProd = false
    } else if (params.deployEnvironment == 'prod') {
      deployDev = false
      deployProd = true
    } else if (params.deployEnvironment == 'all') {
      deployDev = true
      deployProd = true
    } else {
      deployDev = false
      deployProd = false
    }

  // Handle Default Behavior
  } else {
    deployImage = true
    deployDev = true
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

  // Infrastructure Variables (Prod)
  env.ecsFamilyProd = 'blinkhash-prod-documentation'
  env.ecsClusterProd = 'blinkhash-prod-documentation'
  env.ecsDefinitionProd = 'file://aws/task-definition.prod.json'
  env.ecsServiceProd = 'blinkhash-prod-documentation-service'

  // Clone Current Repository
  stage('Clone Repository') {
    echo 'Cloning Current Repository State ...'
    checkout scm
  }

  // Build Docker Image
  stage('Build Docker Image') {
    if (deployImage) {
      echo 'Building Docker Image ...'
      dockerImage = docker.build('blinkhash-documentation')
    }
  }

  // Push Image to AWS ECR
  stage('Save Docker Image') {
    if (deployImage) {
      echo 'Pushing Image to Registry ...'
      docker.withRegistry(env.ecrRegistry, env.ecrCredentials) {
        dockerImage.push(env.BUILD_NUMBER)
        dockerImage.push('latest')
      }
    }
  }

  // Register Task Definition (Dev)
  stage('Dev - Register Task Definition') {
    if (deployDev) {
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

  // Register Task Definition (Prod)
  stage('Prod - Register Task Definition') {
    if (deployProd) {
      echo 'Handling Task Definition Registration ...'
      sh("aws ecs register-task-definition \
        --family ${ env.ecsFamilyProd } \
        --cli-input-json ${ env.ecsDefinitionProd }")
    }
  }

  // Get Last Task Revision (Prod)
  stage('Prod - Load Last Task Revision') {
    if (deployProd) {
      echo 'Check Task Definition and Get Last Revision ...'
      taskRevision = sh(returnStdout: true, script: "aws ecs describe-task-definition \
        --task-definition ${ env.ecsFamilyProd } \
        | egrep 'revision' \
        | tr ',' ' ' \
        | awk '{ print \$2 }'").trim()
    }
  }

  // Deploy to Cluster Service (Prod)
  stage('Prod - Deploy to Cluster Service') {
    if (deployProd) {
      echo 'Deploying to Quality Assurance Cluster ...'
      sh("aws ecs update-service \
        --cluster ${ env.ecsClusterProd } \
        --service ${ env.ecsServiceProd } \
        --task-definition ${ env.ecsFamilyProd }:${ taskRevision } \
        --desired-count 3")
    }
  }
}
