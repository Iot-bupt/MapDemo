//处理rest相关的URL
//在这里数据库返回的数据返给前端，放在.rest({})里面  
//对于不同表的api接口操作，就在controllers下面建不同的api.js文件

const pipes = require('../services/patrolTrack.js');

const APIError = require('../rest').APIError;

module.exports = {
    'GET /api/patroltracks': async (ctx, next) => {
        var res = await pipes.getPipes();     //通过await执行promise对象，拿到结果
        //======================测试测试

        ctx.rest({
            patroltracks: res
        });
    },

    'GET /api/patroltracks/:id':async (ctx,next) =>{      //or name
        var pipeId = ctx.params.id;
        if (!isNaN(pipeId)){
        var res = await pipes.getPipeById(pipeId);
        ctx.rest({
            pipes: res
        });
        }else{
            var res = await pipes.getPipeByName(pipeId);
            ctx.rest({
                patroltracks:res
            });
        }
    },


    'GET /api/tenantpatroltracks/:id': async (ctx,next)=>{
        var tenantId = ctx.params.id;
        var res = await pipes.getPipeByTenentId(tenantId);

        ctx.rest({
            patroltracks: res
        });
    },


    'POST /api/patroltracks': async (ctx, next) => {     //创建场景
        var data = ctx.request.body;
        var res = await pipes.createPipe(data.name, data.tenantId,data.pipeColor,
                            data.pipeWidth,data.pipeType,data.drawPoint);
        ctx.rest(res);
    },


    'DELETE /api/patroltracks/:id': async (ctx, next) => {   //删除场景，失败res=0,成功=1
        console.log(`delete site ${ctx.params.id}...`);
        var s = await pipes.deletePipe(ctx.params.id);
        if (s) {
            ctx.rest(s);
        } else {
            throw new APIError('site:not_found', 'site not found by id.');
        }
    },

    'PUT /api/pipename/:id': async (ctx,next) => {
        console.log(`update pipename ${ctx.params.id}...`);
        var s = await pipes.renameSite(ctx.params.id,ctx.request.body.name);
        if (s[0] === 1) {
            ctx.rest(s);
        } else {
            throw new APIError('site:not_found', 'site not found by id.');
        }
    },
    'PUT /api/resetPatroltrackdrawPoint/:id': async (ctx,next) => {
        console.log(`update siteUrl ${ctx.params.id}...`);
        var s = await pipes.resetPipe(ctx.params.id,ctx.request.body.drawPoint);
        if (s[0] === 1) {
            ctx.rest(s);
        } else {
            throw new APIError('site:not_found', 'site not found by id.');
        }
    },





};
