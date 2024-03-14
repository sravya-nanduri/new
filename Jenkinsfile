pipeline{
    agent any
        stages{
            stage('deployment'){         
                steps{
                  script {
                    if (env.Env == 'dev') {
                sh 'tar -cvzf dist.tar.gz *'
                sh 'ls -la /var/lib/jenkins/workspace/new_job'
                try {
    sh 'scp /path/to/dist.tar.gz jenkins@13.127.219.105:/var/www/html/'
} catch (Exception e) {
    echo "Error occurred during scp command: ${e.message}"
}
                //sh 'scp dist.tar.gz jenkins@13.127.219.105:/var/www/html/'
                //sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/demo/smartims && tar -xvzf dist.tar.gz"'
                // sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/ && sudo chown -R jenkins:jenkins *"'
                // sh 'ssh jenkins@13.127.219.105 "docker build -t smartims:${BUILD_NUMBER}:${env.Env} . &&  docker rm smartims -f && docker run -td --name smartims -p 9000:80 smart'
                    }
                  }
                  script {
                    if (env.Env == 'qa') {
                sh 'tar -cvzf dist.tar.gz *'
                sh 'scp dist.tar.gz jenkins@13.127.219.105:/var/www/html/demo/smartims/'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/demo/smartims && tar -xvzf dist.tar.gz"'
                sh 'ssh jenkins@13.127.219.105 "cd /var/www/html/smartims && sudo chown -R jenkins:jenkins *"'
                sh 'ssh jenkins@13.127.219.105 "docker build -t smartims${BUILD_NUMBER}:${env.Env} . &&  docker rm smartims -f && docker run -td --name smartims -p 9000:80 smart'
                    }
                  }
                }
            }
        }
}
