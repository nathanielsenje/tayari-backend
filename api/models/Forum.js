module.exports = {
  attributes: {
    name: { type: 'string', required: true },
    description: { type: 'string' },
    posts: {
      collection: 'forumpost',
      via: 'forum'
    }
  }
};
