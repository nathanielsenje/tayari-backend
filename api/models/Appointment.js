const { v4: guid } = require('uuid');  // Alias uuidv4 to guid for naming consistency

module.exports = {
  attributes: {
    id: {
      type: 'string',      // Use string type for the GUID
      columnName: 'id',
      required: true,
      unique: true,
    },
    createdAt: { type: 'number', autoCreatedAt: true },
    updatedAt: { type: 'number', autoUpdatedAt: true },
    user: { model: 'user', required: true },
    doctor: { model: 'doctor', required: true },
    date: { type: 'string', required: true },
    status: { type: 'string', isIn: ['scheduled', 'completed', 'cancelled'], defaultsTo: 'scheduled' },
    // Add more attributes as needed
  },

  beforeCreate: async function(values, proceed) {
    values.id = await sails.helpers.generateGuid();
    return proceed();
  }
};
