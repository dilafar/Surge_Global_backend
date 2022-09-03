

1.Clone the repository

git clone https://github.com/dilafar/Surge_Global_backend.git

2.install relevent dependencies 

    if youre using npm then ,

          npm install

    if yore using yarn then ,

          yarn add

    if using Docker then ,

          docker-compose up -d --build
  
  
3. create a .env file to store the secrets

      MONGO_URL =mongodb+srv://username:password@cluster0.9f87n.mongodb.net/databasename?retryWrites=true&w=majority
      
      if using docker and using docker mongo container  or docker mongo-express container then , 
      
             MONGO_URL2=mongodb://username:password@mongo:27017/?authSource=admin
      
      JWT_SECRET=<JWT_SECRET>
      
      PASSWORD = '<EMAIL_PASSWORD>'
      
      EMAIL = '<EMAIL_ADDRESS>'
      
 4.
      
 
