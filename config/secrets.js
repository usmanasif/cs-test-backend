module.exports = {
    projectName: process.env.PROJECT_NAME,

    host: process.env.HOST,
    port: process.env.PORT,

    databaseHost: process.env.DB_HOST,
    databasePort: process.env.DB_PORT,
    databaseUser: process.env.DB_USER,
    databasePass: process.env.DB_PASS,
    databaseName: process.env.DB_NAME,
    databaseConnectionLimit: process.env.DB_CONN_LIMIT,

    crypto: {
        algorithm: process.env.CRYPTO_ALGORITHM,
        password: process.env.CRYPTO_PASSWORD
    },
    
    secret_key: process.env.SECRET_KEY,
    google_cloud_api_key: process.env.GOOGLE_CLOUD_API_KEY,
};
