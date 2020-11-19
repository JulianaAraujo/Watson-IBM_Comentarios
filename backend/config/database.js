module.exports = {
  database: "watson",
  host: "db",
  dialect: "mysql",
  username: "root",
  port: 3306,
  password: "root",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
};
