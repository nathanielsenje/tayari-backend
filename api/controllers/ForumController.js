module.exports = {
  find: async function(req, res) {
    try {
      const forums = await Forum.find();
      return res.json(forums);
    } catch (err) {
      return res.serverError(err);
    }
  },

  findOne: async function(req, res) {
    try {
      const forum = await Forum.findOne({ id: req.params.id });
      if (!forum) return res.notFound();
      return res.json(forum);
    } catch (err) {
      return res.serverError(err);
    }
  },

  create: async function(req, res) {
    try {
      const forum = await Forum.create(req.body).fetch();
      return res.json(forum);
    } catch (err) {
      return res.serverError(err);
    }
  },

  update: async function(req, res) {
    try {
      const forum = await Forum.updateOne({ id: req.params.id }).set(req.body);
      if (!forum) return res.notFound();
      return res.json(forum);
    } catch (err) {
      return res.serverError(err);
    }
  },

  destroy: async function(req, res) {
    try {
      const forum = await Forum.destroyOne({ id: req.params.id });
      if (!forum) return res.notFound();
      return res.ok();
    } catch (err) {
      return res.serverError(err);
    }
  },
};
