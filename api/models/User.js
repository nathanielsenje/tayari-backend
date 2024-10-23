module.exports = {
  attributes: {
    name: { type: 'string', required: true },
    email: { type: 'string', required: true, unique: true, isEmail: true },
    password: { type: 'string', required: true },
    joinDate: { type: 'ref', columnType: 'date' },
    bio: { type: 'string' },
    avatarUrl: { type: 'string' }
  },
  tableName: 'users'  // Add this line
};
