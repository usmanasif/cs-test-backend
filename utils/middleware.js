const Joi = require('@hapi/joi')

exports.auth = (req, res, next) => {
  try {
    const joiSchema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required()
    })
    const { error } = joiSchema.validate(req.body)

    if (error) {
      const message = error.details[0].message.replace(/'/g, '')
      return res.status(400).send({ message })
    } 
    next()
  } catch (err) {
    res.status(500).send({ message: err.message || 'Some error occurred.'})
  }
}

exports.product = (req, res, next) => {
  try {
    const joiSchema = Joi.object({
      product_name: Joi.string().required(),
      description: Joi.string().required(),
      style: Joi.string().required(),
      brand: Joi.string().required(),
      url: Joi.string().allow(''),
      product_type: Joi.string().required(),
      shipping_price: Joi.number().integer().required(),
      note: Joi.string().allow('')
    })
    const { error } = joiSchema.validate(req.body)

    if (error) {
      const message = error.details[0].message.replace(/'/g, '')
      return res.status(400).send({ message })
    }
    next()
  } catch (err) {
    res.status(500).send({ message: err.message || 'Some error occurred.'})
  }
}
