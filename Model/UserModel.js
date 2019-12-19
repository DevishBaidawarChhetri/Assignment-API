const dbConfig = require('../databaseConfig/databaseConfig.js');

// Define sequelize model
var users = dbConfig.sequelize.define('user', {
    //Attributes
    id: {
        type: dbConfig.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type:dbConfig.Sequelize.TEXT,
        allowNull: false
    },
    password: {
        type:dbConfig.Sequelize.TEXT,
        allowNull: false
    }},{
        freezeTableName: true,
        tableName: 'user_table'
    });

    users.sync({force:false})
    .then(function(result){

    })
    .catch(function(err){
        console.log
    })

    module.exports = users