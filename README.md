# Product API with Prisma
## Description
 API and prisma to manage the collection the product using Express.js and PostgreSQL

## Setup
- clone repository
- Navigate to the project directory
- install dependencies :npm intall (express,
npm install prisma -D,
npx prisma init,
npx prisma migrate dev --name first-migration,
npx prisma generate, dotenv, nodemon)
- inside  `.env ` file insert database name, password, postgres, port and localhost.

- inside the prisma folder go to schema.prisma which contain the info:


"""

model product{

  id String @id @default(uuid())
  
  productThumbnail String @map("productThumbnail")
  
  productTitle String @map("productTitle") 
  
  productDescription String @map("productDescription")
  
  productCost Float @map("productCost")
  
  onOffer Boolean @map("onOffer")

  @@map("products_table")
}


"""

Ensure PostgreSQL is running and the database is connected.
Start the server: npm run start:watch for development with nodemon.

## Endpoint
- GET /products - Get all products
- GET /products/:id - Get a single product by ID
- POST /products - Create a new product
- PATCH /products/:id - Update the product 
- DELETE /products/:id - Delete a product by ID
