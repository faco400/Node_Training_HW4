function callback(action, propName, value){
  console.log(`${action} action on ${propName} to ${action === 'get' ? 'access' : 'modify'} ${value}`);
}

function observeObject(obj, func) {
  return new Proxy(obj, {
    get: function (objTarget, propName, receiver) {
      // console.log(objTarget[propName])
      func('get',propName, objTarget[propName]);
      return Reflect.get(objTarget, propName, receiver);
    },
    
    set: function (objTarget, propName, receiver) {
      // console.log(receiver);
      func('set',propName, objTarget[propName]);
      return Reflect.set(objTarget, propName, receiver);
    }
  })
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: "john.doe@example.com"
}


const proxyObj = observeObject(person, callback);
console.log(proxyObj.firstName); //get on john
proxyObj.firstName = 'Joana'; // set john to Joana
console.log(proxyObj.firstName); // get on Joana
