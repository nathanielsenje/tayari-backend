module.exports = {
  attributes: {
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
  }
};
