const { v4: guid } = require('uuid');  // Alias uuidv4 to guid for naming consistency

module.exports = {
  attributes: {
    id: {
      type: 'string',
      columnName: 'id',
      required: true,
      unique: true,
    },
    name: { type: 'string', required: true },
    description: { type: 'string' },
    // posts: {
    //   collection: 'forumpost',
    //   via: 'forum'
    // }
  },
  beforeCreate: async function (values, proceed) {
    values.id = await sails.helpers.generateGuid();
    return proceed();
  }
};
