module.exports = {
  attributes: {
    name: { type: 'string', required: true },
    specialization: { type: 'string' },
    email: { type: 'string', required: true, unique: true },
    appointments: {
      collection: 'appointment',
      via: 'doctor'
    },
    createdAt: { type: 'number', autoCreatedAt: true },
    updatedAt: { type: 'number', autoUpdatedAt: true },
    is_active: {
      type: 'boolean',
      defaultsTo: true  // Set to true by default, adjust if needed
    },
    description: {
      type: 'string',
      columnType: 'text',
      allowNull: true
    }
  },
};
