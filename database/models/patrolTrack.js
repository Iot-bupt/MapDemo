//const TYPES = ['STRING', 'INTEGER', 'BIGINT', 'TEXT', 'DOUBLE', 'DATEONLY', 'BOOLEAN'];
const db = require('../db');

module.exports = db.defineModel('patroltrack', {
    // tenantId: {
    //     type:db.STRING(50),
    //     primaryKey: true,
    //     comment: "自增，主键",
    //     validate:{
    //         initialAutoIncrement: 0,
    //         autoIncrement: true,
    //     }
        
    // },
    tenantId: db.INTEGER,
    name: db.STRING(50),
    pipeColor: db.STRING(50),
    pipeType: db.STRING(50),
    pipeWidth: {
        type:db.DOUBLE,
        defaultValue:0.00
    },
    drawPoint: {
        type:db.STRING(300),
        allowNull : true
    }
});