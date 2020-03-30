
/** 
 * Métodos HTTP:
 *
 * GET: Buscar informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de Parametros:
 * 
 * Query Params: 
 *     Parametros enviados na rota após "?" (filtros, paginação) 
 * Route Params:
 *     Parametros enviados na rotapara identificar recursos  "/:"
 * Requerst Body:
 *     Corpo da requisicao utilizado para criar a alterar recursos
 */

/**
 * SQL:
 *    MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * No SQL:
 *    MongoDB, CouchDB e etc
 */

/** 
 * Driver: Acesso direto as consultas no banco de dados | SELECT * FROM users
 * Query Builder: acesso ao banco por meio do javascript | table('users').selsect("*").whare()
 */

const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const { errors } = require('celebrate')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

//app.listen(3333)

module.exports = app

/**
 * Entidades
 *  Ong
 *  Casos (incident)
 */

 /**
  * Funcionalidades
  *     login de Ong
  *     Logout de Ong
  *     Cadastro de Ong
  *     Cadstrar novos Casos
  *     Deletar Casos
  *     Listar Casos de uma Ong
  *     Listar todos os casos
  *     Entrar em contato com a Ong
  */