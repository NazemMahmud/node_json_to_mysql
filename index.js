import koa from 'koa';
import dotenv from 'dotenv';
dotenv.config()

import {sequelize} from "./config/mysql.connect.js";


const app = new koa();

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.log('Unable to connect to the database:'));

const PORT = process.env.PORT
app.listen(PORT, console.log(`Server started at port: ${PORT}`));
