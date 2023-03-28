let student = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskill: 'Ótimo',
  };
  
  function listSkillsValuesWithFor(student) {
    let skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  function listSkillsValuesWithValues(student) {
    return Object.values(student);
  }
  
  // Sem Object.values
  console.log(listSkillsValuesWithFor(student));
  
  // Com Object.values
  console.log(listSkillsValuesWithValues(student));