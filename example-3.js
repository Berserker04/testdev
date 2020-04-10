import {cleanConsole, createAll} from './data';
import {orderData} from './example-1';
const companies = createAll();

cleanConsole(3, companies);
console.log('---- EXAMPLE 3 --- ', validateMayus(companies));

function validateMayus(req) {
  const companyOrder = orderData(req);
  req = orderCompany(req);
  const resolve = [];
  let validate = false;
  for (let i = 0; i < req.length; i++) {
    if (req[i].name == companyOrder[i].name) {
      for (let l = 0; l < req[i].users.length; l++) {
        const firstName = req[i].users[l].firstName;
        const lastName = req[i].users[l].lastName;
        const firstName2 = companyOrder[i].users[l].firstName;
        const lastName2 = companyOrder[i].users[l].lastName;
        if ((firstName == firstName2) && (lastName == lastName2)) {
          validate = true;
        };
      }
    };
    resolve.push({
      name: req[i].name,
      validate,
    });
    validate = false;
  }
  return resolve;
}

export function orderCompany(data) {
  data.forEach((c, i)=> {
    data[i].users.sort(function(a, b) {
      if (a.firstName > b.firstName) {
        return 1;
      }
      if (a.firstName < b.firstName) {
        return -1;
      }
      return 0;
    });
  });
  data.sort(function(a, b) {
    return b.usersLength - a.usersLength;
  });
  return data;
}
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un booléen validant que tous les noms des "company" et les attributs "firstName"
// et "lastName" des "users" sont en majuscules. Vous devez tester le fonctionnement
// de cette fonction en important la fonction créée pour "example-1.js".
