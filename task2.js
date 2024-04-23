const product = {
  name: "Laptop",
  price: 1000,
  quantity: 5
}

// console.log(product);

Object.defineProperties(product, {
  price: {
    writable: false,
    enumerable: false
  },
  quantity: {
    writable: false,
    enumerable: false,
  }
});

function getTotalPrice(prod) {
  const price = Object.getOwnPropertyDescriptor(prod, 'price').value;
  const quantity = Object.getOwnPropertyDescriptor(prod, 'quantity').value;
  return price * quantity
}

function deleteNonConfigurable(obj, prop) {
  try {
    if(obj.hasOwnProperty(prop)) {
      if (Object.getOwnPropertyDescriptor(obj, prop).configurable === false){
        throw new Error(`Cannot delete ${prop}. Property is non-configurable`)
      } else {
        delete obj[prop];
      }
    }

  } catch (error) {
    console.error(error);
  }
}

// console.log(Object.getOwnPropertyDescriptors(product));
// console.log(product);
// console.log(getTotalPrice(product)); // getting totalPrice
// deleteNonConfigurable(product,'quantity'); // deleting quantity
// deleteNonConfigurable(product,'teste');
// console.log(Object.getOwnPropertyDescriptors(product));