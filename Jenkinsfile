pipeline{
    agent any
        stages{
            stage('deployment'){         
                steps{
                  script {
                    if (env.Env == 'dev') {
                        sh 'echo $env.Env'
                      sh 'tar -cvzf dist.tar.gz *'
                sh 'scp dist.tar.gz jenkins@13.127.219.105:/var/www/html/'
                
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && tar -xvzf dist.tar.gz"'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && sudo chown -R jenkins:jenkins *"'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && sudo docker build -t smartims$env.env$BUILD_NUMBER -f Dockerfile . &&  sudo docker rm smartims$env.env -f && sudo docker run -td --name smartims$env.env -p 9001:80 smartimsenv.env$BUILD_NUMBER"'
                    }
                  }
                  script {
                    if (env.Env == 'qa') {
                sh 'tar -cvzf dist.tar.gz *'
                sh 'scp dist.tar.gz jenkins@13.127.219.105:/var/www/html/'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && tar -xvzf dist.tar.gz"'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && sudo chown -R jenkins:jenkins *"'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && sudo docker build -t smartims$env.ENV$BUILD_NUMBER -f Dockerfile.qa . &&  sudo docker rm smartims$env.ENV -f && sudo docker run -td --name smartims$env.ENV -p 9002:80 smartims$env.ENV$BUILD_NUMBER"'
                    }
                  }
                script {
                    if (env.Env == 'stage') {
                sh 'tar -cvzf dist.tar.gz *'
                sh 'scp dist.tar.gz jenkins@13.127.219.105:/var/www/html/'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && tar -xvzf dist.tar.gz"'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && sudo chown -R jenkins:jenkins *"'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && sudo docker build -t smartims$env.ENV$BUILD_NUMBER -f Dockerfile.stage . &&  sudo docker rm smartims$env.ENV -f && sudo docker run -td --name smartims$env.ENV -p 9003:80 smartims$env.ENV$BUILD_NUMBER"'
                    }
                  }
                script {
                    if (env.Env == 'prod') {
                sh 'tar -cvzf dist.tar.gz *'
                sh 'scp dist.tar.gz jenkins@13.127.219.105:/var/www/html/'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && tar -xvzf dist.tar.gz"'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && sudo chown -R jenkins:jenkins *"'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && sudo docker build -t smartims$env.ENV$BUILD_NUMBER -f Dockerfile.prod . &&  sudo docker rm smartims$env.ENV -f && sudo docker run -td --name smartims$env.ENV -p 9004:80 smartims$env.ENV$BUILD_NUMBER"'
                    }
                  }
                }
            }
        }
    post{
        always { 
                  cleanWs()
              }
    }
}
