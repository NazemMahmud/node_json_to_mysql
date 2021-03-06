import {dbConfig, sequelize} from "../config/mysql.connect.js";
import { Sequelize, Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import * as fs from 'fs';

// logging: process.env.NODE_ENV === "development" ? console.log : false,
// const sequelize = new Sequelize(
//     dbConfig.database,
//     dbConfig.username,
//     dbConfig.password,
//     {
//         host: dbConfig.host,
//         // dialect: dbConfig.dialect,
//         port: dbConfig.port,
//         pool: {
//             max: dbConfig.pool.max,
//             min: dbConfig.pool.min,
//             acquire: dbConfig.pool.acquire,
//             idle: dbConfig.pool.idle,
//         },
//         operatorsAliases: 1,
//     }
// );

const basename = path.basename(__filename);

const db = {};

fs.readdirSync(__dirname)
    .filter(file => {
        return (
            file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
        );
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db;

export {db};
