module.exports = {
    find: async function (req, res) {
        try {
            const doctors = await Doctor.find();
            return res.json(doctors);
        } catch (err) {
            return res.serverError(err);
        }
    },

    findOne: async function (req, res) {
        try {
            const doctor = await Doctor.findOne({ id: req.params.id });
            if (!doctor) return res.notFound();
            return res.json(doctor);
        } catch (err) {
            return res.serverError(err);
        }
    },

    create: async function (req, res) {
        try {
            const doctor = await Doctor.create(req.body).fetch();
            return res.json(doctor);
        } catch (err) {
            return res.serverError(err);
        }
    },

    update: async function (req, res) {
        try {
            const doctor = await Doctor.updateOne({ id: req.params.id }).set(req.body);
            if (!doctor) return res.notFound();
            return res.json(doctor);
        } catch (err) {
            return res.serverError(err);
        }
    },

    destroy: async function (req, res) {
        try {
            const doctor = await Doctor.destroyOne({ id: req.params.id });
            if (!doctor) return res.notFound();
            return res.ok();
        } catch (err) {
            return res.serverError(err);
        }
    },
};
