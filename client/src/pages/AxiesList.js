// const SkillCard = require('../components/SkillsList');

import { useEffect, useState } from 'react';
import { getSkills } from '../services/api/axies';


const SkillCard = ({ part }) => {
  const [skill, setSkill] = useState();
  console.log('skill inside SKillCard', skill)

  useEffect(() => {
    const skill = getSkills(part);
    Promise.resolve(skill).then(res => console.log('res: ', res));
  }, [part]);

  return (
    <div className="container flex py-2 px2 rounded">
      {/* <div className="">{skill.description}</div> */}
      {/* <div className="">{part.type}: &nbsp;</div>
      <div className="">{part.name}</div> */}
    </div>
  );
};

const AxiesList = ({ axies }) => {
  return (
    <div className="grid grid-cols-3 gap-4 px-8 py-8">
      {axies
        ? axies.map((team) =>
            team.map((axie) => (
              <div key={axie.name} className="py-4 px-4 mx-auto rounded-xl w-axieCard shadow-md">
                <div className="container mx-w-full flex">
                  <div className="">Name: {axie.name}</div>
                  <div className="">Class: {axie.class}</div>
                  <div className="">Breed Count: {axie.breedCount}</div>
                </div>

                {/* <img src={axie.image} alt="" className="w-72 mx-auto" /> */}
                <div className="">
                  {axie.parts
                    ? axie.parts.map(
                        (part, index) => <SkillCard part={part} key={index} />
                        // <div className="container flex py-2 px2 rounded">
                        //   <div className="">{part.type}: &nbsp;</div>
                        //   <div className="">{part.name}</div>
                        // </div>
                      )
                    : 'nothing here'}
                </div>
              </div>
            ))
          )
        : 'nothing here'}
    </div>
  );
};

export default AxiesList;
