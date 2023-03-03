let coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };
  
  // for (let property in coolestTvShow) {
  //   console.log(property);
  // }
  
  console.log(Object.keys(coolestTvShow));

  ///////////////////////////////////////////////

  let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };

function skills(student) {
    let arrayWithSkills = Object.keys(student);
    for (let index in arrayWithSkills) {
        console.log(arrayWithSkills[index] + ', nível:', student[arrayWithSkills[index]]);
    }
}

console.log('Estudante 1');
skills(student1);

console.log('Estudante 2');
skills(student2);