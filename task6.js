function deepCloneObject (obj, clonedObjs = new WeakMap()) {
  
  // if obj is not an object or is null just return it
  if(typeof(obj) !== 'object' || obj === null)
    return obj

  // if object already is cloned just return cloned value
  if (clonedObjs.has(obj)){
    return clonedObjs.get(obj);
  }
  
  // if obj is array, cloned obj will also be array, otherwise an object
  const cloneObj = Array.isArray(obj) ?  [] : {};

  // setting the reference of obj to clonedBbj weakmap so that it remembers that it has already been cloned
  clonedObjs.set(obj, cloneObj);
  
  for(key in obj) {
    //for each key, deepClone objects if nested array or object, otherwise clone value (line 4)
    cloneObj[key] = deepCloneObject(obj[key], clonedObjs);
  }


  return cloneObj;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: "john.doe@example.com",
  characteristics : {
    hairColor: 'black',
    eyesColor: 'blue'
  }
}

const clone = deepCloneObject(person);
person.firstName = 'Jane';
person['characteristics'].hairColor = 'yellow';
console.log('clone: \n');
console.log(clone);
console.log('-----------\nperson: \n');
console.log(person);