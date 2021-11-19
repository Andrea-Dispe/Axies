const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');
const Skill = require('../models/skillsModel')
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

module.exports = async function updateSkillsCardsController() {
  console.log('diocane inside updateskills');
  let launchOptions = { headless: false, args: ['--start-maximized'] };

  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();

  // set viewport and user agent (just in case for nice viewing)
  await page.setViewport({ width: 1460, height: 1120 });
  await page.setUserAgent(
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
  );
  await page.setDefaultNavigationTimeout(0);

  await page.goto('https://axie.zone/card-tier-list');
  await page.waitForTimeout(10000);

  // get the array of skill cards
  let arrayCards = await page.$$('#card_container > a > .card_wrapper > div');


  let cards = await page.$$eval('#card_container > a > .card_wrapper > div', (rows) => {
    const skillCards = rows.map(row => {
      const cardFields = {};
      cardFields.skillName = row.querySelector('h3').innerText
      cardFields.energy = row.querySelector('.stats .nrg').innerText
      cardFields.attack = row.querySelector('.stats .atk').innerText
      cardFields.defense = row.querySelector('.stats .def').innerText
      cardFields.type = row.querySelector('.stats .cname').innerText
      cardFields.description = row.querySelector('.description').innerText
      cardFields.part = row.querySelector('.footer .parts').innerText
      return cardFields
    })
    return skillCards
    // skillCard.skillName = rows.map((row) => row.querySelector('h3').innerText);
    // skillCard.energy = rows.map((row) => row.querySelector('.stats .nrg').innerText);
    // skillCard.attack = rows.map((row) => row.querySelector('.stats .atk').innerText);
    // skillCard.defense = rows.map((row) => row.querySelector('.stats .def').innerText);
    // skillCard.description = rows.map((row) => row.querySelector('.description').innerText);
    // skillCard.part = rows.map((row) => row.querySelector('.footer .parts').innerText);
    // return skillCard;
  });

  cards.forEach(skillcard => {
    const saveIntoDb = async function () {
      const cardFields = new Skill({
        title: skillcard.skillName,
        energy: skillcard.energy,
        attack: skillcard.attack,
        defense: skillcard.defense,
        type: skillcard.type,
        description: skillcard.description,
        part: skillcard.part
      })
      try {
        const savedSkill = await cardFields.save();
        console.log(`Log the document to save in MongoDB ${savedSkill}`);
      } catch (error) {
        console.error(error);
      }

    }
    saveIntoDb()
  })




  await browser.close();
};
