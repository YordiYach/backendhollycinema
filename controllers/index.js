const register = require("./register")
const login = require("./login")
const getUserById = require("./getUserById")
const addmovie = require('./addmovie')
const getmovies = require('./getmovies')
const deletemovies = require('./deletemovies')
const getusers = require('./getusers')
const agregarCreditos = require('./editcredits')
const getfacturas = require('./getfacturas')
module.exports = {
  register,
  login,
  getUserById,
  addmovie,
  getmovies,
  deletemovies,
  getusers,
  agregarCreditos,
  getfacturas
};