module.exports = {
  find: async function(req, res) {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (err) {
      return res.serverError(err);
    }
  },

  findOne: async function(req, res) {
    try {
      const user = await User.findOne({ id: req.params.id });
      if (!user) return res.notFound();
      return res.json(user);
    } catch (err) {
      return res.serverError(err);
    }
  },

  create: async function(req, res) {
    try {
      const user = await User.create(req.body).fetch();
      return res.json(user);
    } catch (err) {
      return res.serverError(err);
    }
  },

  update: async function(req, res) {
    try {
      const user = await User.updateOne({ id: req.params.id }).set(req.body);
      if (!user) return res.notFound();
      return res.json(user);
    } catch (err) {
      return res.serverError(err);
    }
  },

  destroy: async function(req, res) {
    try {
      const user = await User.destroyOne({ id: req.params.id });
      if (!user) return res.notFound();
      return res.ok();
    } catch (err) {
      return res.serverError(err);
    }
  },
};
