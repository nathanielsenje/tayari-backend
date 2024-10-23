module.exports = {
  find: async function(req, res) {
    try {
      const articles = await Article.find();
      return res.json(articles);
    } catch (err) {
      return res.serverError(err);
    }
  },

  findOne: async function(req, res) {
    try {
      const article = await Article.findOne({ id: req.params.id });
      if (!article) return res.notFound();
      return res.json(article);
    } catch (err) {
      return res.serverError(err);
    }
  },

  create: async function(req, res) {
    try {
      const article = await Article.create(req.body).fetch();
      return res.json(article);
    } catch (err) {
      return res.badRequest(err);
    }
  },

  update: async function(req, res) {
    try {
      const article = await Article.updateOne({ id: req.params.id }).set(req.body);
      if (!article) return res.notFound();
      return res.json(article);
    } catch (err) {
      return res.serverError(err);
    }
  },

  destroy: async function(req, res) {
    try {
      const article = await Article.destroyOne({ id: req.params.id });
      if (!article) return res.notFound();
      return res.ok();
    } catch (err) {
      return res.serverError(err);
    }
  }
};
