module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  port: parseInt(process.env.DB_PORT),
  pool: {
    max: parseInt(process.env.DB_POOL_MAX),
    min: parseInt(process.env.DB_POOL_MIN),
    acquire: parseInt(process.env.DB_POOL_ACQUIRE),
    idle: parseInt(process.env.DB_POOL_IDLE)
  },
  dialectOptions: {
    dateStrings: process.env.DB_POOL_DIALECT_OPTIONS_DATESTRINGS,
    typeCast: process.env.DB_POOL_DIALECT_OPTIONS_TYPECAST
  },
  timezone: process.env.DB_TIMEZONE
}
