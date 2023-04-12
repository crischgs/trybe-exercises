const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const { name: professional, age, nationality } = user;
const { profession, squad, squadInitials } = jobInfos;

console.log(`Hi, my name is ${professional}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} an my squad is ${squadInitials}-${squad}.`);
