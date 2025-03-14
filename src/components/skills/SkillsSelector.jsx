// src/components/SkillsSelector.jsx
import React, { useState, useEffect } from 'react';

function SkillsSelector({ initialSkills }) {

  const [skills, setSkills] = useState(initialSkills);
  const [selectedSkill, setSelectedSkill] = useState(skills.find(skill => skill.selected));

  const handleSkillClick = (type) => {
    const updatedSkills = skills.map(skill => ({
      ...skill,
      selected: type === skill.type ? true : false,
    }));
    setSkills(updatedSkills);
    setSelectedSkill(updatedSkills.find(skill => skill.type === type));
  };

  useEffect(() => {
    setSelectedSkill(skills.find(skill => skill.selected));
  }, [skills]);

  return (
    <div className="container flex flex-col items-center mx-0 md:mx-20 lg:mx-40 xl:mx-80 2xl:mx-96 w-auto">
      <div className="flex justify-center">
        <ul aria-label="active_tecnology" id="tecnology" className="flex justify-around space-x-6 cursor-pointer text-center items-center">
          {skills.map(skill => (
            <li
              key={skill.type}
              id={skill.type}
              className={`hover:bg-white hover:text-black p-2 rounded-xl border-spacing-1 border-2 ${skill.selected ? 'bg-white text-black actived' : ''}`}
              onClick={() => handleSkillClick(skill.type)}
            >
              <p>{skill.type}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-800 w-full h-96 my-8 rounded-xl">
        <div id="skills" className="flex flex-wrap justify-center items-center space-x-8">
          {selectedSkill?.skills.map(item => (
            <div key={item.label} id={item.label} className={`bg-white text-black rounded-lg flex items-centers text-center mt-8 ${item.id}`}>
              <div className={`bg-contain bg-no-repeat bg-center w-12 h-12 m-[8px]`} style={{ backgroundImage: `url(${item.image})` }} ></div>
              <strong className="flex items-center my-[8px] mr-[8px]">{item.label}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSelector;