const axios = require('axios').default;

const getAxies = async function () {
  try {
    console.log('inside getaxies');
    const response = await axios.get('http://localhost:3008/');
    return response.data;
  } catch (error) {
    console.warn(error.message);
  }
};

export default getAxies;
