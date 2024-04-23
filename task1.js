const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: "john.doe@example.com"
}

Object.keys(person).forEach(prop => {
  Object.defineProperty(person, prop , {
    writable: false,
    configurable: false
  });
});

person.updateInfo = function(newInfo) {
  try{
    Object.keys(newInfo).forEach(key => {
      if(this.hasOwnProperty(key)) { //if prop exists
        if(Object.getOwnPropertyDescriptor(this, key).writable === false){ //if is read-only
          throw new Error(`Cannot update. ${key} is non writable property`);
        } else { //otherwise add new info
          this[key] = newInfo[key];
        }
      }
    })

    // Creating address prop
    Object.defineProperty(person, 'address', {value: {}, enumerable: false, configurable: false});

  }catch(err) {
    console.log(err);
  }
  
}

// console.log(person)
// console.log(Object.getOwnPropertyNames(person));
// person.updateInfo({firstName:'Mac'});
// console.log(Object.getOwnPropertyDescriptors(person));