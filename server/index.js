const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./router');
const cors = require('cors');


dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI

const PORT = process.env.PORT || 3008;
app.use(cors());
app.use(express.json());
// app.use('/auth', require("./routes/auth"))
app.use(router)



mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then((data) => {
  console.log('Connesso al mongoDB su Atlas')
  app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`); // eslint-disable-line no-console
    }
  );
})
.catch(error => {
  console.log(error)
  console.error(error.message)
});

