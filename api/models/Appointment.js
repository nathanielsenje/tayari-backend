module.exports = {
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      // or you can use `required: true` instead of `autoIncrement`
    },
    createdAt: { type: 'number', autoCreatedAt: true },
    updatedAt: { type: 'number', autoUpdatedAt: true },
    user: { model: 'user', required: true },
    doctor: { model: 'doctor', required: true },
    date: { type: 'string', required: true },
    status: { type: 'string', isIn: ['scheduled', 'completed', 'cancelled'], defaultsTo: 'scheduled' },
    // Add more attributes as needed
  },
};
