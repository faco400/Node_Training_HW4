function createImmutableObject(obj) {
  const immutableObj = Array.isArray(obj) ? [] : {} //verify if obj is array or object

  //for each property get their descriptor
  Object.keys(obj).forEach(prop => {
    const descriptor = Object.getOwnPropertyDescriptor(obj,prop);

    //if descriptor is array or  object use recursive call to make immutable nested array or object
    if(Array.isArray(descriptor.value) || descriptor.value === 'object')//{
      immutableObj[prop] = createImmutableObject(descriptor.value);

    // make it immutable
    Object.defineProperty(immutableObj, prop, {
      value: obj[prop],
      writable: false,
      configurable: false,
      enumerable: true
    });
    
  });

  return immutableObj;
}

//person obj from task1
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: "john.doe@example.com"
}

// console.log(Object.getOwnPropertyDescriptors(person));
const newObj = createImmutableObject(person); // making person immutable
// console.log(Object.getOwnPropertyDescriptors(person));
// console.log(Object.getOwnPropertyDescriptors(newObj));
