const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: "john.doe@example.com"
}

Object.keys(person).forEach(prop => {
  Object.defineProperty(person, prop , {
    writable: false,
  });
});

person.updateInfo = function(newInfo) {
  try{
    Object.keys(newInfo).forEach(key => {
      if(this.hasOwnProperty(key)) { //if prop exists
        Object.defineProperty(person, key, {writable: true});
        Object.defineProperty(person, key, {value: newInfo[key], writable: false}); 
      }
    })

    // Creating address prop
    Object.defineProperty(person, 'address', {value: {}, enumerable: false, configurable: false});

  }catch(err) {
    console.error(err);
  }
  
}

// console.log(person)
// console.log(Object.getOwnPropertyNames(person));
// person.updateInfo({firstName:'Mac'});
// console.log(Object.getOwnPropertyDescriptors(person));