const { v4: guid } = require('uuid');  // Alias uuidv4 to guid for naming consistency

module.exports = {
    attributes: {
        id: {
            type: 'string',
            columnName: 'id',
            required: true,
            unique: true,
        },
        doctor_id: { model: 'doctor' },
        client_id: { model: 'client' },
        date: { type: 'ref', columnType: 'date', required: true },
        time: { type: 'ref', columnType: 'time', required: true },
        status: { type: 'string', isIn: ['pending', 'confirmed', 'cancelled'], defaultsTo: 'pending' }
    },

    beforeCreate: async function (values, proceed) {
        values.id = await sails.helpers.generateGuid();
        return proceed();
    }
};
