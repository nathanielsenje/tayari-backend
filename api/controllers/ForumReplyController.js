module.exports = {
  find: async function(req, res) {
    try {
      const replies = await ForumReply.find();
      return res.json(replies);
    } catch (err) {
      return res.serverError(err);
    }
  },

  findOne: async function(req, res) {
    try {
      const reply = await ForumReply.findOne({ id: req.params.id });
      if (!reply) return res.notFound();
      return res.json(reply);
    } catch (err) {
      return res.serverError(err);
    }
  },

  create: async function(req, res) {
    try {
      const reply = await ForumReply.create(req.body).fetch();
      return res.json(reply);
    } catch (err) {
      return res.badRequest(err);
    }
  },

  update: async function(req, res) {
    try {
      const reply = await ForumReply.updateOne({ id: req.params.id }).set(req.body);
      if (!reply) return res.notFound();
      return res.json(reply);
    } catch (err) {
      return res.serverError(err);
    }
  },

  destroy: async function(req, res) {
    try {
      const reply = await ForumReply.destroyOne({ id: req.params.id });
      if (!reply) return res.notFound();
      return res.ok();
    } catch (err) {
      return res.serverError(err);
    }
  }
};
