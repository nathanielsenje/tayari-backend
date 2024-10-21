module.exports = {
  attributes: {
    content: { type: 'string', required: true },
    forum: { model: 'forum', required: true },
    author: { model: 'user', required: true },
    createdAt: { type: 'number', autoCreatedAt: true },
    updatedAt: { type: 'number', autoUpdatedAt: true },
  },
};
