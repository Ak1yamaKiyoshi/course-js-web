const config = require('./config/path') ;
const dbSchema = config.dbSchema;


function validateObject(object) {
    return  Object.keys(object).every(
        (key) => typeof(dbSchema[key]) == typeof(object[key])
    );
}


exports.validateObject = validateObject;