const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');

const config = require('./config/config');
// const db = require('./db/db');

// Load env vars
dotenv.config({ path: './config.env' });

const app = express();

app.get('/', (req, res) => res.send('Hello World'));

const boot = async () => {
    // Initialize config
    const configObj = config.initConfig();
    console.log(configObj);
    
    // Initialized DB Connection
    // await db.dbInit();
    // Running server 
    const server = app.listen(
        configObj.PORT,
        console.log(
            `Server running in ${configObj.activeEnv} mode on port ${configObj.PORT}`.yellow.bold
        )
    );
}

// Here the server starts
boot();

