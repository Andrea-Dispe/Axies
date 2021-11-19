import { updateSkillsCards } from '../services/api/axies';
import { useEffect } from 'react';
const UpdateSkillsCards = () => {
  useEffect(() => {
    updateSkillsCards();
  }, []);
  return <></>;
};

export default UpdateSkillsCards;
