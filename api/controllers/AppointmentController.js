module.exports = {
  find: async function(req, res) {
    try {
      const appointments = await Appointment.find();
      return res.json(appointments);
    } catch (err) {
      return res.serverError(err);
    }
  },

  findOne: async function(req, res) {
    try {
      const appointment = await Appointment.findOne({ id: req.params.id });
      if (!appointment) return res.notFound();
      return res.json(appointment);
    } catch (err) {
      return res.serverError(err);
    }
  },

  create: async function(req, res) {
    try {
      const appointment = await Appointment.create(req.body).fetch();
      return res.json(appointment);
    } catch (err) {
      return res.serverError(err);
    }
  },

  update: async function(req, res) {
    try {
      const appointment = await Appointment.updateOne({ id: req.params.id }).set(req.body);
      if (!appointment) return res.notFound();
      return res.json(appointment);
    } catch (err) {
      return res.serverError(err);
    }
  },

  destroy: async function(req, res) {
    try {
      const appointment = await Appointment.destroyOne({ id: req.params.id });
      if (!appointment) return res.notFound();
      return res.ok();
    } catch (err) {
      return res.serverError(err);
    }
  },
};
