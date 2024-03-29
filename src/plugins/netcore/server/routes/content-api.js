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
        },
        {
            method: "POST",
            path: "/test",
            handler: "Netcore.testAPI",
            config: {
                policies: []
            }
        },
        {
            method: "GET",
            path: "/test",
            handler: "Netcore.testAPI",
            config: {
                policies: []
            }
        }
    ]
}
