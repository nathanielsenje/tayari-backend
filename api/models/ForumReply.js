module.exports = {
    attributes: {
        postId: { model: 'forumpost' },
        authorId: { model: 'client' },
        content: { type: 'string', required: true }
    }
};
