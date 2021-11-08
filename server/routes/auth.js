const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const User = require('../models/usersModel');

router.post(
  '/signup',
  [
    check('username', 'Lo username deve essere almeno di 4 caratteri').trim().isLength({ min: 4 }),
    check('password', 'La password deve essere almeno di 6 caratteri').trim().isLength({ min: 6 }),
  ],
  async (req, res) => {
    const { username, password } = req.body;
    // il metodo validationResult serve per ritornare un array di errori (se ce ne sono ) derivanti dai middleware check
    const hasErrors = validationResult(req);

    // verifica degli input
    // se ci sono errori ritorna con status 400 manda i messaggi di errori al front per visualizzarli
    if (!hasErrors.isEmpty()) {
      return res.status(400).json({
        erros: hasErrors.array(),
      });
    }

    // verificare se esiste un utente nel db con l'username fornita dallo user
    const userInDb = await User.find({ username });
    if (userInDb[0]) {
      return res.status(400).json({
        erros: [
          {
            msg: "Questo utente e' gia registrato",
          },
        ],
      });
    }
    // crittografare la password
    const hashedPassword = await bcrypt.hash(password, 10);

    // creare un utente con l'username e la password criptata
    const user = new User({ username, password: hashedPassword });

    // creare il jwt token e mandarlo al front
    try {
      // salvare lo user nel db
      await user.save();
      // creare il token
      const token = await JWT.sign(
        {
          username,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: 864_000,
        }
      );

      res.status(200);
    } catch (error) {
      res.status(409).json({ message: error });
    }
  }
);

router.post('/login',
[
  check('username', 'Lo username deve essere almeno di 4 caratteri').trim().isLength({ min: 4 }),
  check('password', 'La password deve essere almeno di 6 caratteri').trim().isLength({ min: 6 }),
],
async (req, res) => {
  const { username, password } = req.body;

  // verificare se un utente con questa username esiste
  const user = await User.findOne({ username });
  // se non esiste ritona l'errore
  if (!user) {
    return res.status(404).json({
      erros: [
        {
          msg: 'Non esiste nessun utente con questo username',
        },
      ],
    });
  }

  // se esiste bisogna comparare la password che l'utente ha fornito con quella criptata nel db corrispondente alla stessa username fornita dall'utente
  try {
    const isValid = await bcrypt.compare(password, user.password);
  } catch (error) {
  }

  const isValid = await bcrypt.compare(password, user.password);
  // se la password combacia
  if (isValid) {
    // crea il jwt token
    const token = await JWT.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: 864_000,
    });

    return res.json(token);
  } else {
    return res.status(400).json({
      erros: [
        {
          msg: 'Credenziali invalide',
        },
      ],
    });
  }
});

module.exports = router;
