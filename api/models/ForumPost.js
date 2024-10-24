const { v4: guid } = require('uuid');  // Alias uuidv4 to guid for naming consistency

module.exports = {
  attributes: {
    id: {
      type: 'string',      // Use string type for the GUID
      columnName: 'id',
      required: true,
      unique: true,
    },
    title: { type: 'string', required: true },
    content: { type: 'string', required: true },
    author_id: { type: 'string' },
    category: { type: 'string', required: true },
    forum_id: { type: 'string' },
    // replies: { collection: 'forumreply', via: 'postId' }
  },
  beforeCreate: async function (values, proceed) {
    values.id = await sails.helpers.generateGuid();
    return proceed();
  }
};
