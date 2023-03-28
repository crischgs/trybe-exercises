let person = {
    name:'Roberto',
  };
  
  let lastName = {
    lastName: 'Silva',
  };
  
  let newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person);