## run project

docker-compose up --build

### run single image

docker build -t auth .
docker run -p 3001:3001 auth
