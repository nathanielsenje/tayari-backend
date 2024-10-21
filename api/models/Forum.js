module.exports = {
  attributes: {
    title: { type: 'string', required: true },
    description: { type: 'string' },
    creator: { model: 'user', required: true },
    createdAt: { type: 'number', autoCreatedAt: true },
    updatedAt: { type: 'number', autoUpdatedAt: true },
    posts: {
      collection: 'forumPost',
      via: 'forum'
    }
  },
};
