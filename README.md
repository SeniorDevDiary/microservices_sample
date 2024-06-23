## run project

docker-compose up --build

### run single image

docker build -t auth .
docker run -p 3001:3001 auth

usefull https://www.youtube.com/watch?v=EQlEX8ugoNA&list=PLaLqLOj2bk9ZV2RhqXzABUP5QSg42uJEs&index=8

## RabibtMQ

Donload - https://www.rabbitmq.com/docs/install-homebrew

# Starting the Server

CONF_ENV_FILE="/opt/homebrew/etc/rabbitmq/rabbitmq-env.conf" /opt/homebrew/opt/rabbitmq/sbin/rabbitmq-server

/opt/homebrew/sbin/rabbitmqctl enable_feature_flag all

# starts a local RabbitMQ node

brew services start rabbitmq

# highly recommended: enable all feature flags on the running node

/opt/homebrew/sbin/rabbitmqctl enable_feature_flag all

## Stopping the Server

# stops the locally running RabbitMQ node

brew services stop rabbitmq

http://localhost:5672/

npm install amqplib

Doc https://www.rabbitmq.com/tutorials/tutorial-one-javascript

https://youtu.be/T-xCylkjSf8?si=-e1E_P-YgRpD4Tlu&t=514
