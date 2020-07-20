const knex = require('knex')
const configuration = require('../../knexfile')

const config  = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development

//console.log('CONNECTION ENV: ', process.env.NODE_ENV, '->> env:', config)

const connection = knex(config)

module.exports = connection