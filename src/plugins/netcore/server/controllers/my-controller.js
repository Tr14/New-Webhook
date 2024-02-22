'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('netcore')
      .service('myService')
      .getWelcomeMessage();
  },
});
