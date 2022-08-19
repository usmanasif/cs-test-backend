const db = require("../../models");
const jwt = require("../../utils/jwt");
const Joi = require('@hapi/joi');

const Users = db.users;

exports.login = async (req, res) => {
    try {
        const joiSchema = Joi.object({
            email: Joi.string().required(),
            password_hash: Joi.string().required(),
            password_plain: Joi.string().required()
        });
        const { error, value } = joiSchema.validate(req.body);

        if (error) {
            const message = error.details[0].message.replace(/"/g, '');
            res.status(400).send({ message });
        } else {
            Users.findOne({
                where: {
                    email: req.body.email.trim(),
                    password_plain: req.body.password_plain
                },
                attributes: ['id', 'name', 'email']
            })
            .then(user => {
                const token = jwt.signToken({ userId: user.id, name: user.name, email: user.email });
                res.status(200).send({ token });
            })
            .catch(() => {
                res.status(403).send({ message: "Incorrect Logins" });
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
    }
}
