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
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && sudo docker build -t smartims$env$BUILD_NUMBER -f Dockerfile ."'
                sh 'ssh jenkins@13.127.219.105 "sudo docker tag smartims$env$BUILD_NUMBER:latest sravyananduri/smartims$env$BUILD_NUMBER"' 
                sh 'ssh jenkins@13.127.219.105 "sudo docker push sravyananduri/smartims$env$BUILD_NUMBER"'
                sh 'ssh jenkins@13.127.219.105 "sudo docker rm smartims$env -f && sudo docker run -td --name smartims$env -p 9001:80 smartims$env$BUILD_NUMBER"'
                    }
                  }
                  script {
                    if (env.Env == 'qa') {
                      sh 'tar -cvzf dist.tar.gz *'
                sh 'scp dist.tar.gz jenkins@13.127.219.105:/var/www/html/'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && tar -xvzf dist.tar.gz"'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && sudo chown -R jenkins:jenkins *"'
                sh "ssh jenkins@13.127.219.105 "sed -i 's/npm run build:dev/npm run build:${env}/' /var/www/html/Dockerfile""
                sh 'ssh jenkins@13.127.219.105 "sudo docker tag smartims$env$BUILD_NUMBER:latest sravyananduri/smartims$env$BUILD_NUMBER"' 
                sh 'ssh jenkins@13.127.219.105 "sudo docker push sravyananduri/smartims$env$BUILD_NUMBER"'
                sh 'ssh jenkins@13.127.219.105 "sudo docker rm smartims$env -f && sudo docker run -td --name smartims$env -p 9001:80 smartims$env$BUILD_NUMBER"'
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
