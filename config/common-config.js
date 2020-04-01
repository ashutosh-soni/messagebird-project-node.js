const commonConfig = {
    //only for information and troubleshooting
    version: "1.0.0",
    isDev : false,

    // Collection of environment variable definitions. These override the configuration
    // obtained from the config files. The **key** represents the environemnt variable
    // name suffix and the value represents the index in the config map.
    envVars: {
        // Shows active enviroment like [prod, testing, dev]
        NODE_ENV: ["activeEnv"],
        DB_URI: ["dbSpec", "uri"],
        DB_DATABASE: ["dbSpec", "db"],
        DB_USER: ["dbSpec", 'user'],
        DB_PASSWORD: ['dbSpec', 'password']
    }, 

    activeEnv: null,
    PORT: null,

    // MongoDB connections specs
    dbSpec: {
        uri: "",
        uriParams: {user: "<USER>", password:"<PASSWORD>"},
        db: null,
        user: null,
        password: null
    }


} 

module.exports = commonConfig;