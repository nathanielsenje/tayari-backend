module.exports = {
    find: async function (req, res) {
        try {
            const bookings = await Booking.find().populate('doctor_id').populate('client_id');
            return res.json(bookings);
        } catch (err) {
            return res.serverError(err);
        }
    },

    findOne: async function (req, res) {
        try {
            const booking = await Booking.findOne({ id: req.params.id }).populate('doctor_id').populate('client_id');
            if (!booking) return res.notFound();
            return res.json(booking);
        } catch (err) {
            return res.serverError(err);
        }
    },

    create: async function (req, res) {
        try {
            const booking = await Booking.create(req.body).fetch();
            return res.json(booking);
        } catch (err) {
            return res.badRequest(err);
        }
    },

    update: async function (req, res) {
        try {
            const booking = await Booking.updateOne({ id: req.params.id }).set(req.body);
            if (!booking) return res.notFound();
            return res.json(booking);
        } catch (err) {
            return res.serverError(err);
        }
    },

    destroy: async function (req, res) {
        try {
            const booking = await Booking.destroyOne({ id: req.params.id });
            if (!booking) return res.notFound();
            return res.ok();
        } catch (err) {
            return res.serverError(err);
        }
    }
};
