student = {
    firstName: 'Cristiano',
    lastName:'Chagas'
}

function addProperty(object, key, value) {
    object[key] = value;
};

let newKey = 'email';
let email = 'crischagase@gmail.com';
addProperty(student, newKey, email);

newKey = 'telefone';
let phone = '+5535912345678'
addProperty(student, newKey, phone);

newKey = 'github';
let github = '@crischgs'
addProperty(student, newKey, github);

console.log(student);