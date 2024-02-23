'use strict';

module.exports = {
    async webhook(ctx) {
        console.log(ctx.request.body);
        //console.log(ctx.request.header);

        if (Object.keys(ctx.request.body).length === 0) {
            ctx.body = "Body is null" 
        } else if (typeof(ctx.request.body) == 'string'){
            var obj1 = JSON.parse(ctx.request.body);
            var string1 = obj1.data.replace(/'/g, "\"");
            var result = JSON.parse(string1);

            const entry = await strapi.db.query('plugin::netcore.netcorelead').create({
                data: {
                    Email: result.voolatechsmt[0].att_params.EMAIL,
                    Mobile: "",
                    Source: result.voolatechsmt[0].att_params.SOURCE,
                    Order_ID: result.voolatechsmt[0].att_params.ORDER_ID,
                    Full_Name: result.voolatechsmt[0].att_params.FULL_NAME,
                    Journey_Name: result.voolatechsmt[0].custom_params.Journey_Name,
                    List_ID: result.voolatechsmt[0].custom_params.List_ID,
                    Is_Get: false
                },
            });
            ctx.body = "Receive string data from body"
        } 
        else {
            var string1 = ctx.request.body.data.replace(/'/g, "\"");
            var result = JSON.parse(string1);

            const entry = await strapi.db.query('plugin::netcore.netcorelead').create({
                data: {
                    Email: result.voolatechsmt[0].att_params.EMAIL,
                    Mobile: "",
                    Source: result.voolatechsmt[0].att_params.SOURCE,
                    Order_ID: result.voolatechsmt[0].att_params.ORDER_ID,
                    Full_Name: result.voolatechsmt[0].att_params.FULL_NAME,
                    Journey_Name: result.voolatechsmt[0].custom_params.Journey_Name,
                    List_ID: result.voolatechsmt[0].custom_params.List_ID,
                    Is_Get: false
                },
            });
            ctx.body = "Receive object data from body"
        }   
    }
};
