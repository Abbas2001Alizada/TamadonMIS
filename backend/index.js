import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import sequelize from './dbConnection.js';
const app = express();


app.use(cors());
app.use(bodyParser.json());


sequelize.sync({alter:true})

// Start the server
const PORT =  3004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
