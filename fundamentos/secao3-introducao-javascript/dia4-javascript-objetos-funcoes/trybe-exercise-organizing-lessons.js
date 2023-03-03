let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

function addNewKey(object, key, value) {
    object[key] = value;
}

addNewKey(lesson2, 'turno', 'noite')
console.log(lesson2);

function listKeys (object) {
    console.log(Object.keys(object));
}

listKeys(lesson3);

function calcSize (object) {
    return Object.keys(object).length;
}

console.log(calcSize(lesson2));

function listValues (object) {
    console.log(Object.values(object));
}

listValues(lesson3);

let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
});

console.log(allLessons);


function numberOfStudents(object) {
    let total = 0;
    let keys = Object.keys(object);
    for (index in keys) {
        total += object[keys[index]].numeroEstudantes;
    }
    return total;
}

console.log(numberOfStudents(allLessons));

function getValueByNumber(obj, number) {
    return Object.values(obj)[number];
}

console.log(getValueByNumber(lesson2, 3));

function verifyPair(obj, key, value) {
    let entries = Object.entries(obj);
    let isEqual = false;
    for (let index in entries) {
        if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
    }
    return isEqual;
}

console.log(verifyPair(lesson1, 'professor', 'Maria Clara'));