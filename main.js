'use strict'

let db = require('./db')

let sqlCommand = `SELECT current_date as hoy, current_time as hora`

db
 .query( sqlCommand )
  .then( result => console.log('Hoy:', result[0].hoy, 'Hora: ', result[0].hora) )
  .catch( err => console.log(err) )
