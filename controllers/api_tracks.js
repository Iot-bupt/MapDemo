//处理rest相关的URL
//在这里数据库返回的数据返给前端，放在.rest({})里面  
//对于不同表的api接口操作，就在controllers下面建不同的api.js文件

const tracks = require('../services/track.js');

const APIError = require('../rest').APIError;

module.exports = {
    'GET /api/track': async (ctx, next) => {
        var res = await tracks.getTracks();     //通过await执行promise对象，拿到结果
        //======================测试测试

        ctx.rest({
            tracks: res
        });
    },

    'GET /api/tracks/:id':async (ctx,next) =>{      //or name
        var trackId = ctx.params.id;
        if (!isNaN(trackId)){
        var res = await tracks.getTrackById(trackId);
        ctx.rest({
            tracks: res
        });
        }else{
            var res = await tracks.getTrackByName(trackId);
            ctx.rest({
                tracks:res
            });
        }
    },


    'GET /api/tenanttracks/:id': async (ctx,next)=>{
        var tenantId = ctx.params.id;
        var res = await tracks.getTrackByTenentId(tenantId);

        ctx.rest({
            tracks: res
        });
    },


    'POST /api/tracks': async (ctx, next) => {     //创建场景
        var data = ctx.request.body;
        var res = await tracks.createTrack(data.staffName, data.tenantId,data.drawPoint);
        ctx.rest(res);
    },


    'DELETE /api/tracks/:id': async (ctx, next) => {   //删除场景，失败res=0,成功=1
        console.log(`delete track ${ctx.params.id}...`);
        var s = await tracks.deleteTrack(ctx.params.id);
        if (s) {
            ctx.rest(s);
        } else {
            throw new APIError('track:not_found', 'track not found by id.');
        }
    },



    
    

};
