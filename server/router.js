const router = require('express').Router();
import {getAxies} from './controllers/axiesController'



router.get('/', getAxies);


module.exports = router
