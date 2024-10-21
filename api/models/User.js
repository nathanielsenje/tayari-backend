module.exports = {
  attributes: {
    username: { type: 'string', required: true, unique: true },
    email: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
    fullName: { type: 'string' },
    createdAt: { type: 'number', autoCreatedAt: true },
    updatedAt: { type: 'number', autoUpdatedAt: true },
    isActive: { type: 'boolean', defaultsTo: true },
    appointments: {
      collection: 'appointment',
      via: 'user'
    }
  },
};
