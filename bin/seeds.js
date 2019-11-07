const Celebrity = require('../models/celebrity');
const mongoose = require('mongoose');
require('../config/db.config');

const celebrities = [
    {
      name: "Arnold S.",
      occupation: "Actor",
      catchPhrase: "I'll be back!"
    },
    {
      name: "Robert de Niro",
      occupation: "Actor",
      catchPhrase: "Are you talking to me?"
    },
    {
      name: "José Mourinho",
      occupation: "Football coach",
      catchPhrase: "I'm the special one"
    }
  ];

Celebrity.create(celebrities)
    .then((celebrities) => console.info(`${celebrities.length} new celebrities added to the database`))
    .catch(error => console.error(error))
    .then(() => mongoose.connection.close());
