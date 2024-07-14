import { createExpressServer, useExpressServer } from "routing-controllers";
import 'dotenv/config';
import express from 'express';
import { ProductController } from "./controllers/ProductControllers";

let PORT = 3002;

// CORS middleware
const corsMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200); // End the response for OPTIONS requests
  } else {
    next(); // Proceed to the next middleware for other requests
  }
};

// creates express app
const app = express();

// Use CORS middleware before routing-controllers
app.use(corsMiddleware);

// Register routes with routing-controllers
useExpressServer(app, {
  routePrefix: "/bp",
  controllers: [
    ProductController,
  ], // specify controllers
});

// run express application on specified port
app.listen(PORT, () => {
  console.log(`Servidor Iniciado`);
  console.log(`Host: http://localhost:${PORT}`);
  console.log(`Fecha/Hora: ${new Date().toLocaleString()}`);
});