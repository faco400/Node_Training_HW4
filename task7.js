const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateObject(obj, schema) {

  for(key in schema) {
    
    // if prop is required and not in obj return false
    if(schema[key].required === true && !obj.hasOwnProperty(key)){
      return false;
      
    } else {
      // if type of obj differ from schema return false
      if (typeof(obj[key]) !== schema[key].type){
        return false;
      }
    
      // if prop has maxValue limit and obj exceeds that limit, return false
      if(schema[key].maxVALUE && obj[key].length > schema[key].maxVALUE)
        return false;

      // email validation 
      if(key === 'email' && emailRegex.test(obj[key]) === false)
        return false
    }
    
  }
  
  return true;
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

const personSchema = {
  firstName: {
    type: 'string',
    maxVALUE: 30,
    required: true
  },
  lastName: {
    type: 'string',
    maxVALUE: 30,
    required: true
  },
  age: {
    type: 'number',
    required: true
  },
  email: {
    type: 'string',
    required: false
  },
  characteristics: {
    type: 'object',
    required: false
  }

}
console.log(validateObject(person, personSchema));