const { v4: guid } = require('guid');  // Alias uuidv4 to guid for naming consistency

module.exports = {
    attributes: {
        id: {
            type: 'string',
            columnName: 'id',
            required: true,
            unique: true,
        },
        title: { type: 'string', required: true },
        content: { type: 'string', required: true },
        author_id: { model: 'user' },
        category: { type: 'string', required: true },
        image_url: { type: 'string' }
    },
    beforeCreate: async function (values, proceed) {
        values.id = await sails.helpers.generateGuid();
        return proceed();
    }
};
