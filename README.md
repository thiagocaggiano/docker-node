## Docker-node
# Installation

You should never clone this repository; instead you should fork it into your account. Once you have done that, type:

    git clone git@github.com:mygithubaccount/docker-node.git
    cd docker-node


# Node
## Start
      npm install 
      node app.js


# Docker
## Building your image
   
   $ docker build -t <your username>/node-web-app .

## Run the image
   
   $ docker run -p 49160:8080 -d <your username>/node-web-app



