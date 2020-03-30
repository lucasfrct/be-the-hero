const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')
const OngController = require('./controllers/OngController')
const InicdentsController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.get("/", (request, response)=> {
    
    const QueryParams = request.query
    console.log("Query Params: ", QueryParams)
 
    const RouteParams = request.params
    console.log("Route Params: ", RouteParams)
 
    const RequestBody = request.body
    console.log("Request Body: ", RequestBody)
     
     return response.json({ 
         event: "Semana Omnistack 11.0",
         aluno:"Lucas Costa",
     })
 
})

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(9).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}),  OngController.create)

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), InicdentsController.index)

routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    })
}), InicdentsController.create)

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}),InicdentsController.delete)

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index)

module.exports = routes
