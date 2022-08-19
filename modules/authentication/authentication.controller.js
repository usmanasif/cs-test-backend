const db = require('../../models')
const jwt = require('../../utils/jwt')
const attributes = require('../../utils/constants')

const Users = db.users

exports.login = async (req, res) => {
  Users.findOne({
    where: {
      email: req.body.email.trim(),
      password_plain: req.body.password
    },
    attributes: attributes.auth
  })
  .then(({ id, name, email }) => {
    const token = jwt.signToken({ userId: id, name, email })
    res.status(200).send({ token })
  })
  .catch(() => res.status(403).send({ message: 'Incorrect Logins' })) 
}
