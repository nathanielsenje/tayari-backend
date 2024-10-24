const { v4: guid } = require('uuid');  // Alias uuidv4 to guid for naming consistency


module.exports = {
  attributes: {
    id: {
      type: 'string',      // Use string type for the GUID
      columnName: 'id',
      required: true,
      unique: true,
    },
    name: { type: 'string' },
    specialization: { type: 'string' },
    description: { type: 'string' },
    image_url: { type: 'string' },
    rating: { type: 'number' },
    reviews: { type: 'number' },
    availability: { type: 'string' },
    education: { type: 'string' },
    experience: { type: 'string' },
    location: { type: 'string' },
    phone: { type: 'string' },
    email: { type: 'string', required: true, isEmail: true },
    working_hours: { type: 'string' },
  },
  beforeCreate: async function (values, proceed) {
    values.id = await sails.helpers.generateGuid();
    return proceed();
  }
};
