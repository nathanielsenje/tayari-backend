module.exports = {
    attributes: {
        title: { type: 'string', required: true },
        content: { type: 'string', required: true },
        author_id: { model: 'user' },
        category: { type: 'string', required: true },
        image_url: { type: 'string' }
    }
};
