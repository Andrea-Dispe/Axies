const axios = require('axios').default;

export const getAxies = async function () {
  try {
    console.log('inside getaxies');
    const response = await axios.get('http://localhost:3008/');
    return response.data;
  } catch (error) {
    console.warn(error.message);
  }
};

export const updateSkillsCards = async function () {
  try {
    console.log('inside updateSkillsCards');
    await axios.get('http://localhost:3008/update-skills');
  } catch (error) {
    console.log(error);
  }
};

export const getSkills = async function (part) {
  try {
    // console.log('inside getSkills service frontend');
    const params = JSON.stringify(part);
    axios
      .post('http://localhost:3008/get-skills', params, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((res) => res);
  } catch (error) {
    console.log(error);
  }
};
