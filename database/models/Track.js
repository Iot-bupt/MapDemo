//const TYPES = ['STRING', 'INTEGER', 'BIGINT', 'TEXT', 'DOUBLE', 'DATEONLY', 'BOOLEAN'];
const db = require('../db');

module.exports = db.defineModel('track', {
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
    staffName: db.STRING(50),
    drawPoint: {
        type:db.STRING(300),
        allowNull : true
    }
});