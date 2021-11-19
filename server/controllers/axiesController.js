var axios = require('axios').default;
const Skills = require('../models/skillsModel');

const roninAddresses = ['ronin:a10c90215c9ffd24bed7310f396eef97d6df718b'];

// all addresses
// const roninAddresses = [
//   'ronin:14c2ad7a385684a09fdb0bed38381a3d2b937eea',
//   'ronin:c678fe22b8f3727d8da5ceda7c1536d81d2d08c9',
//   'ronin:63 ceccaf4dac105e96409f394920be130864e68d',
//   'ronin:fa81c796229b97b0deb090ef7b63c0a7ebbcf6b1',
//   'ronin:173441449 c81f27eb9fae7c8b45599197a947ec3',
//   'ronin:198 b7d48a4f5511fc94ea46321279fabbb93d796',
//   'ronin:33e ce3a3ef339d4dedda3e11f799adfb7a804bed',
//   'ronin:42e18125 c3c4972bdc25c42a7bc60b1d02b3038d',
//   'ronin:f006e6000a7aac1288e95c826c18c6d87b7cf60b',
//   'ronin:16e ca1b8fe8b0608d1ec298c1a122ac8315aec84',
//   'ronin:a10c90215c9ffd24bed7310f396eef97d6df718b',
//   'ronin:cb074838d63752813b79a95261158df72e591493',
// ];

async function getAxies(req, res) {
  const axies = roninAddresses.map((roninAddress) => {
    const requestAxies = async function () {
      const ethAddress = turnRonintoEthAddress(roninAddress);
      const resp = await axios.get(`https://axie-infinity.p.rapidapi.com/get-axies/${ethAddress}`, {
        headers: {
          'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
          'x-rapidapi-key': 'bdfdbc16f9mshd493ef30dd2c7fcp1ce95cjsnf0d069420d61',
        },
      });

      return resp.data.data.axies.results;
    };

    return requestAxies();
  });

  Promise.all(axies).then((t) => {
    res.send(t);
  });

  // console.log('resp: ', resp.data.data.axies);

  // res.send(resp.data.data.axies)

  // loop through all addresses
  // const promises = addresses.map((address) => {
  //   const axiesInfo = async function (address) {
  //     var options = {
  //       method: 'GET',
  //       url: `https://axie-infinity.p.rapidapi.com/get-axies/${address}`,
  //       headers: {
  //         'x-rapidapi-host': 'axie-infinity.p.rapidapi.com',
  //         'x-rapidapi-key': 'bdfdbc16f9mshd493ef30dd2c7fcp1ce95cjsnf0d069420d61',
  //       },
  //     };
  //     const response = await axios.request(options);
  //     console.log('*****************************************************************************************************************************response: ', response);
  //     return response;
  //   };
  //   return axiesInfo(address);
  // })

  // // mapping thtough addresses and making a get req for each of them will return and array o promises
  // const axies = await Promise.all(promises);
  // res.send(axies);
}

async function getSkillsController(req, res) {
  console.log('inside getSkillsController');
  const part = req.body;
  const partFront = `${part.type}: ${part.name}`.trim();

  const doc = await Skills.findOne({part: partFront})
  console.log('doc: ', doc);
  
  res.send(doc)
}

function turnRonintoEthAddress(roninAddress) {
  return roninAddress.replace('ronin:', '0x').trim().replace(' ', '');
}

module.exports = { getSkillsController, getAxies };
