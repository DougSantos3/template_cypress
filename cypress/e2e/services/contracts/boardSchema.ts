import Joi from 'joi'

const boardSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  url: Joi.string().uri().optional(),
  closed: Joi.boolean().optional()
})

const boardsSchema = Joi.array().items(boardSchema)

export { boardsSchema }