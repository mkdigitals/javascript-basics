const createPerson = (name, age) => {
  return {
    "name" : name,
    "age" : age
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]) {
    return true;
  }
  return false;
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  for (let i = 0; i < people.length; i += 1) {
    if(people[i].name == name) {
      return people[i];
    }
  }
  return null;
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  const sumAges = people.reduce(
    (accumulator, currentValue) => accumulator + currentValue.age,
    0
  );
  return sumAges / people.length;
};

// expect(bill.introduce('Fred')).toEqual(
//   'Hi Fred, my name is Bill and I am 40!'
// );

const createTalkingPerson = (name, age) => {
  return {
    "name" : name,
    "age" : age,
    introduce : function(string) {
      return `Hi ${string}, my name is ${this.name} and I am ${this.age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
