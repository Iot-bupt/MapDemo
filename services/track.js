// store products as database:
//在这里操作数据库拿数据
//对一张表的所有操作都写在这一个js中

const model = require('../database/model');

//let Site = model.Site;
let Track = model.Track;

function Tracks(staffName,tenantId,drawPoint) {
    this.staffName = staffName;
    this.tenantId = tenantId;
    this.drawPoint = drawPoint;
}

module.exports = {
    getTracks: async () => {
        var tracks = await Track.findAll();              //这里可以调用数据库操作方法
        
       
        return tracks;     //async函数return的时候会返回一个promise对象
    },


    getTrackById: async (id) => {
        
        var track = await Track.findAll({
            where:{
                id: id
            }
        });
        
        
        return track;
    },

    getTrackByName: async (name) => {
        
        var track = await Track.findAll({
            where:{
                name: name
            }
        });
        
        
        return track;
    },

    getTrackByTenentId: async (id) => {
        
        var track = await Track.findAll({
            where:{
                tenantId: id
            }
        });
        
        
        return track;
    },


    createTrack: async (staffName,tenantId,drawPoint) => {
        
        var s = new Tracks(staffName,tenantId,drawPoint);
        var track = await Track.create(s);
        
        return track;
    },


    deleteTrack: async (id) => {
        
        var track = await Track.destroy({
            where: {
                id:id
            }
        });
           //删除成功返回1，失败返回0

        return track;
    },

    // renamePipe: async (id,name) => {
    //
    //     var pipe = await Pipe.update(
    //         {
    //             name:name,
    //             updatedAt:Date.now(),
    //         },
    //         {
    //             where: {
    //             id:id
    //             }
    //     }
    //     );     //返回一个一维数组，表示每个更新的失败或成功，0表示失败，1表示成功
    //
    //         //更新成功返回[1]，失败返回[0]
    //
    //
    //     return pipe;
    // },
    //
    // resetPipe: async (id,drawPoint) => {
    //
    //     var pipe = await Pipe.update(
    //         {
    //             drawPoint:drawPoint,
    //             updatedAt:Date.now(),
    //         },
    //         {
    //             where: {
    //                 id:id
    //             }
    //         }
    //     );     //返回一个一维数组，表示每个更新的失败或成功，0表示失败，1表示成功
    //
    //     //更新成功返回[1]，失败返回[0]
    //
    //
    //     return pipe;
    // },

};
