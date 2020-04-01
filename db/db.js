const mongoose = require('mongoose');

const cf = require('../config/config');


exports.dbInit = async () => {
    const config = cf.getConfig()
    const mongoUri = config.dbSpec.uri;

    const conn = await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })
    console.log(`DB is Connected: ${conn.connection.host}`.cyan.underline.bold)
}