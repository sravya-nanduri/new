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
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html && sudo sed -i s/dev/qa/g Dockerfile"'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && sudo docker build -t smartims$env$BUILD_NUMBER -f Dockerfile ."'
                sh 'ssh jenkins@13.127.219.105 "sudo docker tag smartims$env$BUILD_NUMBER:latest sravyananduri/smartims$env$BUILD_NUMBER"' 
                sh 'ssh jenkins@13.127.219.105 "sudo docker push sravyananduri/smartims$env$BUILD_NUMBER"'
                sh 'ssh jenkins@13.127.219.105 "sudo docker rm smartims$env -f && sudo docker run -td --name smartims$env -p 9002:80 smartims$env$BUILD_NUMBER"'
                    }
                  }
                script {
                    if (env.Env == 'stage') {
                 sh 'echo $env.Env'
                      sh 'tar -cvzf dist.tar.gz *'
                sh 'scp dist.tar.gz jenkins@13.127.219.105:/var/www/html/'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && tar -xvzf dist.tar.gz"'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && sudo chown -R jenkins:jenkins *"'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html && sudo sed -i s/dev/stage/g Dockerfile"'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && sudo docker build -t smartims$env$BUILD_NUMBER -f Dockerfile ."'
                sh 'ssh jenkins@13.127.219.105 "sudo docker tag smartims$env$BUILD_NUMBER:latest sravyananduri/smartims$env$BUILD_NUMBER"' 
                sh 'ssh jenkins@13.127.219.105 "sudo docker push sravyananduri/smartims$env$BUILD_NUMBER"'
                sh 'ssh jenkins@13.127.219.105 "sudo docker rm smartims$env -f && sudo docker run -td --name smartims$env -p 9003:80 smartims$env$BUILD_NUMBER"'
                  }
                }
                script {
                    if (env.Env == 'prod') {
               sh 'echo $env.Env'
                      sh 'tar -cvzf dist.tar.gz *'
                sh 'scp dist.tar.gz jenkins@13.127.219.105:/var/www/html/'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && tar -xvzf dist.tar.gz"'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && sudo chown -R jenkins:jenkins *"'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html && sudo sed -i s/dev/prod/g Dockerfile"'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && sudo docker build -t smartims$env$BUILD_NUMBER -f Dockerfile ."'
                sh 'ssh jenkins@13.127.219.105 "sudo docker tag smartims$env$BUILD_NUMBER:latest sravyananduri/smartims$env$BUILD_NUMBER"' 
                sh 'ssh jenkins@13.127.219.105 "sudo docker push sravyananduri/smartims$env$BUILD_NUMBER"'
                sh 'ssh jenkins@13.127.219.105 "sudo docker rm smartims$env -f && sudo docker run -td --name smartims$env -p 9004:80 smartims$env$BUILD_NUMBER"'
                    }
                  }
                }
            }
        }
    post{
        success {
                script {
                  if (env.Env == 'dev') {      
                      googlechatnotification   message: "Project Name: ${JOB_NAME} Build ${BUILD_NUMBER} from Branch ${Branch_name} on Environment ${env.Env} was successfull. Check output in https://3.127.219.105:9000"  , url: "https://chat.googleapis.com/v1/spaces/AAAAsd9I_OM/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=n4j_V50Bj_WIXBbyYN_XKmb9XPIEDXePemjYp_mfMro"                                             
                  }
                  else if (env.Env == 'qa') {
                      googlechatnotification   message: "Project Name: ${JOB_NAME} Build ${BUILD_NUMBER} from Branch ${Branch_name} on Environment ${env.Env} was successfull. Check output in https://"  , url: "https://chat.googleapis.com/v1/spaces/AAAAsd9I_OM/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=n4j_V50Bj_WIXBbyYN_XKmb9XPIEDXePemjYp_mfMro"
                  }
                  else if (env.Env == 'stage'){
                      googlechatnotification   message: "Project Name: ${JOB_NAME} Build ${BUILD_NUMBER} from Branch ${Branch_name} on Environment ${env.Env} was successfull. Check output in https://divami.com/"  , url: "https://chat.googleapis.com/v1/spaces/AAAAsd9I_OM/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=n4j_V50Bj_WIXBbyYN_XKmb9XPIEDXePemjYp_mfMro"
                  }
                  else{
                      googlechatnotification   message: "Project Name: ${JOB_NAME} Build ${BUILD_NUMBER} from Branch ${Branch_name} on Environment ${env.Env} was successfull. Check output in https://divami.com/"  , url: "https://chat.googleapis.com/v1/spaces/AAAAsd9I_OM/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=n4j_V50Bj_WIXBbyYN_XKmb9XPIEDXePemjYp_mfMro"
                  }
                }
              }
              failure {                            
                  googlechatnotification message: "Project Name: ${JOB_NAME} Build ${BUILD_NUMBER} from Branch ${Branch_name} on Environment ${env.Env} is Failed: Check output logs at  ${RUN_DISPLAY_URL}"  , url: "https://chat.googleapis.com/v1/spaces/AAAAsd9I_OM/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=n4j_V50Bj_WIXBbyYN_XKmb9XPIEDXePemjYp_mfMro"                           
              }
        always {
                  cleanWs()
              }
    }
}
