module.exports = {
    attributes: {
        doctor_id: { model: 'doctor' },
        client_id: { model: 'client' },
        date: { type: 'ref', columnType: 'date', required: true },
        time: { type: 'ref', columnType: 'time', required: true },
        status: { type: 'string', isIn: ['pending', 'confirmed', 'cancelled'], defaultsTo: 'pending' }
    }
};
