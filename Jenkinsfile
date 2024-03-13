pipeline{
    agent any
        stages{
            stage('deployment'){         
                steps{
                  script {
                    if (env.Env == 'dev') {
                sh 'tar -cvzf dist.tar.gz *'
                sh 'scp dist.tar.gz jenkins@demo.divami.com:/var/www/html/demo/smartims/'
                sh 'ssh jenkins@demo.divami.com "cd /var/www/html/demo/smartims && tar -xvzf dist.tar.gz"'
                sh 'ssh jenkins@demo.divami.com "cd /var/www/html/smartims && sudo chown -R jenkins:jenkins *"'
                sh 'ssh jenkins@demo.divami.com "docker build -t smartims:${BUILD_NUMBER}:${env.Env} . &&  docker rm smartims -f && docker run -td --name smartims -p 9000:80 smart'
                    }
                  }
                  script {
                    if (env.Env == 'qa') {
                sh 'tar -cvzf dist.tar.gz *'
                sh 'scp dist.tar.gz jenkins@demo.divami.com:/var/www/html/demo/smartims/'
                sh 'ssh jenkins@demo.divami.com "cd /var/www/html/demo/smartims && tar -xvzf dist.tar.gz"'
                sh 'ssh jenkins@demo.divami.com "cd /var/www/html/smartims && sudo chown -R jenkins:jenkins *"'
                sh 'ssh jenkins@demo.divami.com "docker build -t smartims${BUILD_NUMBER}:${env.Env} . &&  docker rm smartims -f && docker run -td --name smartims -p 9000:80 smart'
                    }
                  }
                }
            }
        }
}
