const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');

const prodConfig =  require('./prod/prod-config');
const testConfig = require('./testing/test-config');
const devConfig = require('./dev/dev-config');
const commonConfig =  require('./common-config');


let _config = {...commonConfig};

exports.initConfig = () => {
    const NODE_ENV = process.env.NODE_ENV;
    const DB_URI = process.env.DB_URI;
    switch(NODE_ENV){
        case 'productions':
            _config = {
                ..._config,
                ...prodConfig
            }
            break;
        case 'testing':
            _config = {
                ..._config,
                ...testConfig
            }
            break;
        default:
            _config = {
                ..._config,
                ...devConfig
            }
    }

    // Implement common env variable
    _config = {
        ..._config,
        dbSpec: {
            ..._config.dbSpec,
            uri: DB_URI
        }
    }
    

    console.log(
        `config init for env: ${_config.activeEnv}`.blue.bold,
        );
        
    return _config   
}

exports.getConfig = () => {
    return _config;
}
