'use strict';

module.exports = {
    async webhook(ctx) {
        console.log(ctx.request.body);
        //console.log(ctx.request.header);
        ctx.body = "AKADIGITAL"

        const entry = await strapi.db.query('api::netcore.netcorelead').create({
            data: {
                Email: ctx.request.body.data.voolatechsmt[0].att_params.EMAIL,
                Mobile: "",
                Source: ctx.request.body.data.voolatechsmt[0].att_params.SOURCE,
                Order_ID: ctx.request.body.data.voolatechsmt[0].att_params.ORDER_ID,
                Full_Name: ctx.request.body.data.voolatechsmt[0].att_params.FULL_NAME,
                Journey_Name: ctx.request.body.data.voolatechsmt[0].custom_params.Journey_Name,
                List_ID: ctx.request.body.data.voolatechsmt[0].custom_params.List_ID,
                Is_Get: false
            },
        });
    }
};
