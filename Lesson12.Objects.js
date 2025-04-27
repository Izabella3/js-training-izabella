// ✅ Task 1: Create a User Object
// Description:
// Create a function createUser that takes three arguments: name, age, and isAdmin.
// It should return an object with those properties and values.
// Requirements:
// - Use object literal syntax to build the object.
// - The returned object should look like: { name: 'Alice', age: 30, isAdmin: true }

function createUser(name, age, isAdmin) {
   let user = {
    name,
    age,
    isAdmin,
   };
   return user;
  }
  console.log(createUser("Alice", 30, true));


  // ✅ Task 2: Calculate Total Sales
  // Description:
  // Write a function calculateTotalSales that takes a nested object representing products sold during the day.
  // Each product key contains an object with price and quantitySold.
  // The function should return the total revenue.
  // Requirements:
  // - Use a for...in loop to iterate over the object.
  // - Multiply price * quantitySold for each product and sum the results.
  
  function calculateTotalSales(salesData) {
    let totalSales = 0;

    for (let key in salesData){
        let product = salesData[key];
         totalSales += product.price * product.quantitySold;
    }
    
    return totalSales;
  }

  let salesData = {
    bread: {
        price: 350,
        quantitySold: 50,
    },
    cheese: {
        price: 1000,
        quantitySold: 10,
    },
    juice: {
        price: 1500,
        quantitySold: 2,
    }
};
  console.log(calculateTotalSales(salesData));

  // ✅ Task 3: Convert Array to Object
  // Description:
  // Create a function arrayToObject that takes an array and returns an object.
  // The object should have the array indexes as keys and the elements as values.
  // Requirements:
  // - Use a loop to build the object manually (no Object.fromEntries).
  // - Return the constructed object.
  
  function arrayToObject(arr) {
    let object = {};
    for (let i = 0; i < arr.length; i++) {
        object[i] = arr[i];
    }

    return object;

  }
  let arr = ["red", "green", "blue"];
  console.log(arrayToObject(arr));
  // ✅ Task 4: Get Keys with String Values Only
  // Description:
  // Create a function getStringKeys that takes an object and returns an array of keys
  // whose values are strings.
  // Requirements:
  // - Use a loop or Object.keys() to iterate through the object.
  // - Return only the keys where the value is of type 'string'.
  
  function getStringKeys(obj) {
    let arr = [];
    for (let key in obj) {
        if ( typeof obj[key] === "string"){
            arr.push(key);
        } 
    }
    return  arr;
}
  
   let obj = {
    name: "Voskan",
    lastName: "Baghdasaryan",
    fullName: "Voskan Baghdasaryan",
    age: 28
   }

   console.log(getStringKeys(obj));

  // ✅ Task 5: Merge Two Objects
  // Description:
  // Write a function mergeObjects that takes two objects and returns a new object that combines the properties of both.
  // If the same key exists in both, the value from the second object should overwrite the first.
  // Requirements:
  // - Do not modify the original objects.
  
  function mergeObjects(obj1, obj2) {
    let mergedObj = {};

    for (let key of Object.keys(obj1)) {
        mergedObj[key] = obj1[key];
    }

    for (let key of Object.keys(obj2)) {
        mergedObj[key] = obj2[key];
    }

    return mergedObj;
}


let obj1 = {
    color: "red",
    type: "paint",
    expiryDate: "12.12.2025",
};
let obj2 = {
    quality: "high",
    type: "highQualityPaint",
    quantity: 35,
};

console.log(mergeObjects(obj1, obj2));
