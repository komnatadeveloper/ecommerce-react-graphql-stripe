'use strict';

/**
 * Dsf.js controller
 *
 * @description: A set of functions called "actions" for managing `Dsf`.
 */

module.exports = {

  /**
   * Retrieve dsf records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.dsf.search(ctx.query);
    } else {
      return strapi.services.dsf.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a dsf record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.dsf.fetch(ctx.params);
  },

  /**
   * Count dsf records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.dsf.count(ctx.query);
  },

  /**
   * Create a/an dsf record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.dsf.add(ctx.request.body);
  },

  /**
   * Update a/an dsf record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.dsf.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an dsf record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.dsf.remove(ctx.params);
  }
};
