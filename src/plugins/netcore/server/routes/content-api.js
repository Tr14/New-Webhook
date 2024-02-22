"use strict";

module.exports = {
    type: 'content-api',
    routes: [
        {
            method: "POST",
            path: "/webhook",
            handler: "Netcore.webhook",
            config: {
                policies: []
            }
        }
    ]
}
