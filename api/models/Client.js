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
        username: { type: 'string', required: true, unique: true },
        email: { type: 'string', required: true, unique: true, isEmail: true },
        password: { type: 'string', required: true },
        join_date: { type: 'ref', columnType: 'date' },
        bio: { type: 'string' },
        avatar_url: { type: 'string' }
    },
    tableName: 'client',

    beforeCreate: async function(values, proceed) {
        values.id = await sails.helpers.generateGuid();
        return proceed();
    }
};
