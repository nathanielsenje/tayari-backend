module.exports = {
    attributes: {
        name: { type: 'string', required: true },
        username: { type: 'string', required: true, unique: true },
        email: { type: 'string', required: true, unique: true, isEmail: true },
        password: { type: 'string', required: true },
        join_date: { type: 'ref', columnType: 'date' },
        bio: { type: 'string' },
        avatar_url: { type: 'string' }
    },
    tableName: 'client'  // Changed from 'users' to 'clients'
};
