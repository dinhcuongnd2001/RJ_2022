const zoo = new Set();

addAnimal = (str) => zoo.add(str);
removeAnimal = (str) => zoo.delete(str) ;

addAnimal('lion');
removeAnimal('lion');
console.log(zoo);