module.exports = {
  find: async function(req, res) {
    try {
      const posts = await ForumPost.find().populate('replies');
      return res.json(posts);
    } catch (err) {
      return res.serverError(err);
    }
  },

  findOne: async function(req, res) {
    try {
      const post = await ForumPost.findOne({ id: req.params.id }).populate('replies');
      if (!post) return res.notFound();
      return res.json(post);
    } catch (err) {
      return res.serverError(err);
    }
  },

  create: async function(req, res) {
    try {
      const post = await ForumPost.create(req.body).fetch();
      return res.json(post);
    } catch (err) {
      return res.badRequest(err);
    }
  },

  update: async function(req, res) {
    try {
      const post = await ForumPost.updateOne({ id: req.params.id }).set(req.body);
      if (!post) return res.notFound();
      return res.json(post);
    } catch (err) {
      return res.serverError(err);
    }
  },

  destroy: async function(req, res) {
    try {
      const post = await ForumPost.destroyOne({ id: req.params.id });
      if (!post) return res.notFound();
      return res.ok();
    } catch (err) {
      return res.serverError(err);
    }
  }
};
