'use strict'

let pg = require('pg-native')
let configPG = 'postgresql://postgres:postgres@localhost:5432/postgres'

module.exports = {
  // Creamos la funcion para enviar comandos sql a la bd,
  // una vez conectados y retornando como Promise.
  query : ( sqlCommand ) => {
    return new Promise( (resolve, reject) => {
      let pgCliente = new pg()
      pgCliente.connect(configPG, (err)=>{
        if (err) return reject(err)
        pgCliente.query(sqlCommand, (err, result) => {
            if (err) return reject(err)
            resolve(result)
            pgCliente.end()
        })
      })
    })
  }
}
