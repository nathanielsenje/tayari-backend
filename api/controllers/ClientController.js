module.exports = {
    find: async function (req, res) {
        try {
            const clients = await Client.find();
            return res.json(clients);
        } catch (err) {
            return res.serverError(err);
        }
    },

    findOne: async function (req, res) {
        try {
            const client = await Client.findOne({ id: req.params.id });
            if (!client) return res.notFound();
            return res.json(client);
        } catch (err) {
            return res.serverError(err);
        }
    },

    create: async function (req, res) {
        try {
            const client = await Client.create(req.body).fetch();
            return res.json(client);
        } catch (err) {
            return res.serverError(err);
        }
    },

    update: async function (req, res) {
        try {
            const client = await Client.updateOne({ id: req.params.id }).set(req.body);
            if (!client) return res.notFound();
            return res.json(client);
        } catch (err) {
            return res.serverError(err);
        }
    },

    destroy: async function (req, res) {
        try {
            const client = await Client.destroyOne({ id: req.params.id });
            if (!client) return res.notFound();
            return res.ok();
        } catch (err) {
            return res.serverError(err);
        }
    },
};
