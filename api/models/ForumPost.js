module.exports = {
  attributes: {
    title: { type: 'string', required: true },
    content: { type: 'string', required: true },
    authorId: { model: 'client' },
    category: { type: 'string', required: true },
    forum: { model: 'forum' },
    replies: { collection: 'forumreply', via: 'postId' }
  }
};
