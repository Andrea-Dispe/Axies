const router = require('express').Router();
const {getAxies} = require('./controllers/axiesController')
const updateSkillsCardsController = require('./controllers/updateSkillsCards')
const {getSkillsController}= require('./controllers/axiesController')

router.get('/', getAxies);
router.get('/update-skills', updateSkillsCardsController)
router.post('/get-skills', getSkillsController)


module.exports = router
