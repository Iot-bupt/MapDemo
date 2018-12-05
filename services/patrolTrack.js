// store products as database:
//在这里操作数据库拿数据
//对一张表的所有操作都写在这一个js中

const model = require('../database/model');

//let Site = model.Site;
let Pipe = model.patrolTrack;
console.log(Pipe)
function Pipes(name,tenantId,pipeColor,pipeWidth,pipeType,drawPoint) {
    this.name = name;
    this.tenantId = tenantId;
    this.pipeColor = pipeColor;
    this.pipeWidth = pipeWidth;
    this.pipeType = pipeType;
    this.drawPoint = drawPoint;
}

module.exports = {
    getPipes: async () => {
        var pipes = await Pipe.findAll();              //这里可以调用数据库操作方法
        
       
        return pipes;     //async函数return的时候会返回一个promise对象
    },


    getPipeById: async (id) => {
        
        var pipe = await Pipe.findAll({
            where:{
                id: id
            }
        });
        
        
        return pipe;
    },

    getPipeByName: async (name) => {
        
        var pipe = await Site.findAll({
            where:{
                name: name
            }
        });
        
        
        return pipe;
    },

    getPipeByTenentId: async (id) => {
        
        var pipe = await Pipe.findAll({
            where:{
                tenantId: id
            }
        });
        
        
        return pipe;
    },


    createPipe: async (name,tenantId,pipeColor,pipeWidth,pipeType,drawPoint) => {
        
        var s = new Pipes(name,tenantId,pipeColor,pipeWidth,pipeType,drawPoint);
        var pipe = await Pipe.create(s);
        
        return pipe;
    },


    deletePipe: async (id) => {
        
        var pipe = await Pipe.destroy({
            where: {
                id:id
            }
        });
           //删除成功返回1，失败返回0

        return pipe;
    },

    renamePipe: async (id,name) => {
        
        var pipe = await Pipe.update(
            {
                name:name,
                updatedAt:Date.now(),
            },
            {
                where: {
                id:id
                }
        }
        );     //返回一个一维数组，表示每个更新的失败或成功，0表示失败，1表示成功
        
            //更新成功返回[1]，失败返回[0]
       

        return pipe;
    },

    resetPipe: async (id,drawPoint) => {

        var pipe = await Pipe.update(
            {
                drawPoint:drawPoint,
                updatedAt:Date.now(),
            },
            {
                where: {
                    id:id
                }
            }
        );     //返回一个一维数组，表示每个更新的失败或成功，0表示失败，1表示成功

        //更新成功返回[1]，失败返回[0]


        return pipe;
    },

};
