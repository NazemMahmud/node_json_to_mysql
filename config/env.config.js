import dotenv from 'dotenv';
dotenv.config()

export const dbConfig = {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    dialect: process.env.DB_CONNECTION,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
