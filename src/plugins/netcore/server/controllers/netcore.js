'use strict';

module.exports = {
    async webhook(ctx) {
        console.log(ctx.request.body);
        //console.log(ctx.request.header);
        ctx.body = "AKADIGITAL"
    }
};
