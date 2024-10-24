const { v4: guid } = require('uuid');  // Alias uuidv4 to guid for naming consistency

module.exports = {
  attributes: {
    id: {
      type: 'string',      // Use string type for the GUID
      columnName: 'id',
      required: true,
      unique: true,
    },
    name: { type: 'string', required: true },
    email: { type: 'string', required: true, unique: true, isEmail: true },
    password: { type: 'string', required: true },
    joinDate: { type: 'ref', columnType: 'date' },
    bio: { type: 'string' },
    avatarUrl: { type: 'string' }
  },

  beforeCreate: async function (values, proceed) {
    // Set the ID using our helper before creating the record
    values.id = await sails.helpers.generateGuid();
    return proceed();
  },

  tableName: 'users'  // Add this line
};
