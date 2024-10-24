const { v4: guid } = require('uuid');  // Alias uuidv4 to guid for naming consistency

module.exports = {
    attributes: {
        id: {
            type: 'string',
            columnName: 'id',
            required: true,
            unique: true,
        },
        post_id: { model: 'forumpost' },
        author_id: { model: 'client' },
        content: { type: 'string', required: true }
    },
    beforeCreate: async function (values, proceed) {
        values.id = await sails.helpers.generateGuid();
        return proceed();
    }
};
